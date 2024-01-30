import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = `FS9etrBst86DERXJcqAuzJDSMq3EFgid`;
  httpClient = inject(HttpClient);

  constructor() {}

  getLocation(city: string) {
    return this.httpClient.get(`http://localhost:3000/location`);
    return this.httpClient.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${city}`
    );
  }
  getCurrentConditions(locationKey: string) {
    return this.httpClient.get(`http://localhost:3000/currentConditions`);
    return this.httpClient.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`
    );
  }
  getfiveDaysForecasts(locationKey: string) {
    return this.httpClient.get(`http://localhost:3000/fiveDaysForecasts`);
    return this.httpClient.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}`
    );
  }
}
