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
    favorite: false,
    forecast: [],
  });
  favoritesArr: fv[] = [];
  constructor() {}

  getLocation(city: string) {
    city = city.replaceAll(" ","%20");
    return this.http.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${city}`
    );
  }
  getCurrentConditions(locationKey: string) {
    return this.http.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`
    );
  }
  setCurrentConditions(id: string, city: string, data: any) {
    patchState(this.wsState, (state) => ({
      ...state,
      id: id,
      city: city,
      temp: data.Temperature.Metric.Value,
      weatherText: data.WeatherText,
      img: `https://www.accuweather.com/images/weathericons/${data.WeatherIcon}.svg`,
    }));
  }
  getForecast(locationKey: string) {
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
    if (!this.wsState.favorites().length) {
      this.favoritesArr.push({
        id: id,
        city: this.wsState.city(),
        temp: this.wsState.temp(),
        img: this.wsState.img(),
      });
    } else {
      const favorite = this.wsState.favorites().find((item) => item.id === id);
      if (!favorite) {
        this.favoritesArr.push({
          id: id,
          city: this.wsState.city(),
          temp: this.wsState.temp(),
          img: this.wsState.img(),
        });
      }
    }

    patchState(this.wsState, (state) => ({
      ...state,
      favorite: true,
      favorites: this.favoritesArr,
    }));
  }
  removeFromFavorite(id: string) {
    if (!this.wsState.favorites()) return;
    const index = this.wsState.favorites().findIndex((item) => item.id === id);
    this.favoritesArr.splice(index, 1);
    patchState(this.wsState, (state) => ({
      ...state,
      favorite: false,
      favorites: this.favoritesArr,
    }));
  }

  isFavorite(id: string) {
    const favorite = this.wsState.favorites().find((item) => item.id === id);
    const isFave = favorite ? true : false;
    patchState(this.wsState, (state) => ({
      ...state,
      favorite: isFave,
    }));
  }
}
