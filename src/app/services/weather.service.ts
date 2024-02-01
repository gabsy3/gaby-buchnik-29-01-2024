import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { fcw, fv, wsState } from '../models/weather.model';
import { signalState, patchState } from '@ngrx/signals';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = `FS9etrBst86DERXJcqAuzJDSMq3EFgid`;
  http = inject(HttpClient);
  wsState = signalState<wsState>({
    id: '',
    city: '',
    temp: '',
    weatherText: '',
    img: '',
    favorites: [],
    favorite:false,
    forecast: [],
  });
  favoritesArr: fv[] = [];
  constructor() {}

  getLocation(city: string) {
    return this.http.get(`http://localhost:3000/location`);
    return this.http.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${city}`
    );
  }
  getCurrentConditions(locationKey: string) {
    return this.http.get(`http://localhost:3000/currentConditions`);
    return this.http.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`
    );
  }
  setCurrentConditions(city: string, data: any) {
    patchState(this.wsState, (state) => ({
      ...state,
      city: city,
      temp: data.Temperature.Metric.Value,
      weatherText: data.WeatherText,
      img: `https://www.accuweather.com/images/weathericons/${data.WeatherIcon}.svg`,
    }));
  }
  getForecast(locationKey: string) {
    return this.http.get(`http://localhost:3000/fiveDaysForecasts`);
    return this.http.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?metric=true&apikey=${this.apiKey}`
    );
  }
  setForecast(data: fcw[]) {
    patchState(this.wsState, (state) => ({
      ...state,
      forecast: data,
    }));
  }
  addToFavorite(id: string) {
    if(!this.wsState.favorites().length){
      this.favoritesArr.push({
        id:id,
        city:this.wsState.city(),
        temp:this.wsState.temp(),
        img:this.wsState.img()
      });
    }
    else{
      for (let item of this.wsState.favorites()) {
        if (item.id === id) {
          return;
        } else {
          this.favoritesArr.push(item);
        }
      }
    }
    
    patchState(this.wsState, (state) => ({
      ...state,
      favorite:true,
      favorites: this.favoritesArr,
    }));

    console.log(this.wsState());
  }
  removeFromFavorite(id: string) {
    //patchState(this.wsState, (state) => ({ count: state.count + 1 }));
  }
}
