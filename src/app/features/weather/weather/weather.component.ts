import { Component, OnInit, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { WeatherService } from '../../../services/weather.service';
import {
  CurrentConditions,
  Weather,
  fcw,
} from '../../../models/weather.model';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  inputCity: string = 'tel aviv';
  locations: Weather[] = [];
  weatherService = inject(WeatherService);
  currentId: string = '215854';
  forecaseArr: fcw[] = [];
  readonly state = this.weatherService.wsState;

  ngOnInit(): void {
    this.getCurrentConditions();
  }
  onKeyUp(e: any) {
    this.weatherService.getLocation(e.target.value).subscribe((res: any) => {
      this.locations = [];
      for (let item of res) {
        this.locations.push(item.LocalizedName);
      }
    });
  }
  getCurrentConditions() {
    this.weatherService.getLocation(this.inputCity).subscribe((res: any) => {
      for (let item of res) {
        if (item.LocalizedName.toLowerCase() === this.inputCity.toLowerCase()) {
          this.currentId = item.Key;
        }
      }
    });

    this.weatherService
      .getCurrentConditions(this.currentId)
      .subscribe((data: any) => {
        this.weatherService.setCurrentConditions(this.inputCity , data[0]);
      });

    this.weatherService
      .getForecast(this.currentId)
      .subscribe((data: any) => {
        this.forecaseArr = [];
        for (let item of data.DailyForecasts) {
          this.forecaseArr.push({
            minTemp: item.Temperature.Minimum.Value,
            maxTemp: item.Temperature.Maximum.Value,
            date: item.Date,
            img: `https://www.accuweather.com/images/weathericons/${item.Day.Icon}.svg`,
          });
        }
        this.weatherService.setForecast(this.forecaseArr);
      });
  }

  favoriteClick() {
    this.weatherService.addToFavorite();
    this.weatherService.removeFromFavorite();
  }
}
