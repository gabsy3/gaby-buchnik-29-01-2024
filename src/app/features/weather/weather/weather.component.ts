import { Component, OnInit, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { WeatherService } from '../../../services/weather.service';
import { location } from '../../../models/weather.model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurrentConditionsComponent } from "../current-conditions/current-conditions.component";
import { ForecastComponent } from "../forecast/forecast.component";

@Component({
    selector: 'app-weather',
    standalone: true,
    templateUrl: './weather.component.html',
    styleUrl: './weather.component.scss',
    imports: [
        MatInputModule,
        MatFormFieldModule,
        CommonModule,
        FormsModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        CurrentConditionsComponent,
        ForecastComponent
    ]
})
export class WeatherComponent implements OnInit {
  inputCity: string = 'tel aviv';
  locations: location[] = [];
  weatherService = inject(WeatherService);
  route = inject(ActivatedRoute);
  toastr = inject(ToastrService);
  currentId: string = '';
  readonly state = this.weatherService.wsState;

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['data']) {
      this.route.queryParams.subscribe((params: any) => {
        this.inputCity = params.data;
      });
    }
    this.locationClicked();
  }
  onKeyUp(e: any) {
    this.weatherService.getLocation(e.target.value).subscribe((res: any) => {
      this.locations = [];
      for (let item of res) {
        this.locations.push(item.LocalizedName);
      }
    });
  }
  omit_special_char(ev: any) {
    var k;
    k = ev.keyCode;
    return (k >= 97 && k <= 122) || (k >= 65 && k <= 90);
  }
  locationClicked() {
    this.weatherService.getLocation(this.inputCity).subscribe({
      next: (res: any) => {
        for (let item of res) {
          if (
            item.LocalizedName.toLowerCase() === this.inputCity.toLowerCase()
          ) {
            this.currentId = item.Key;
          }
        }
        this.weatherService.setLocationKey(this.currentId , this.inputCity);
      },
      error: (err) => {
        this.toastr.error(err.message,"getLocation");
      },
    });
  }

 
}
