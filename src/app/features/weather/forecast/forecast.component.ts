import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, inject } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { fcw } from '../../../models/weather.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent implements OnInit{
  weatherService = inject(WeatherService);
  toastr = inject(ToastrService);

  readonly state = this.weatherService.wsState;
  forecaseArr: fcw[] = [];
  constructor(){
    effect(()=>{
      this.loadForecast();
     })
  }
  ngOnInit(): void {
    this.loadForecast();
  }
  loadForecast(){
    this.weatherService.getForecast(this.state.id()).subscribe({
      next: (data: any) => {
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
      },
      error: (err) => {
        this.toastr.error(err.message,"getForecast");
      },
    });
  }
}
