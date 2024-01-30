import { Component, OnInit, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
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
  fiveDay,
} from '../../../models/weather.model';
import { Add, Remove } from '../../../actions/favorites.actions';

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

  control: FormControl = new FormControl('tel aviv');
  locations: Weather[] = [];
  weatherService = inject(WeatherService);
  currentId: string = "215854";
  currentConditions: CurrentConditions = {
    city: '',
    Temperature: '',
    WeatherIcon: '',
    WeatherText: '',
  };
  fiveDaysForecast:fiveDay[] = [];

  constructor(private store: Store){}
  
  ngOnInit(): void {
    this.getCurrentConditions(this.control.value);
  }
  onKeyUp(e: any) {
    this.weatherService.getLocation(e.target.value).subscribe((res: any) => {
      this.locations = [];
      for (let item of res) {
        this.locations.push(item.LocalizedName);
      }
    });
  }
  getCurrentConditions(val: string) {
    this.weatherService.getLocation(val).subscribe((res: any) => {
      for (let item of res) {
        if (item.LocalizedName.toLowerCase() === val.toLowerCase()) {
          this.currentId = item.Key;
        }
      }
    });

    this.weatherService
      .getCurrentConditions(this.currentId)
      .subscribe((data: any) => {
        this.currentConditions.city = val;
        this.currentConditions.Temperature = data[0].Temperature.Metric.Value;
        this.currentConditions.WeatherIcon = `https://www.accuweather.com/images/weathericons/${data[0].WeatherIcon}.svg`
        this.currentConditions.WeatherText = data[0].WeatherText;
      });

    this.weatherService
      .getfiveDaysForecasts(this.currentId)
      .subscribe((data: any) => {
        this.fiveDaysForecast = [];
        for (let item of data.DailyForecasts) {
        
          this.fiveDaysForecast.push({
            minTemp:item.Temperature.Minimum.Value,
            maxTemp:item.Temperature.Maximum.Value,
            Date:item.Date,
            WeatherIcon:`https://www.accuweather.com/images/weathericons/${item.Day.Icon}.svg`
          })
        }
      });
  }
  favoriteClick(){
    this.store.dispatch(Add());
    this.store.dispatch(Remove());
  }
}
