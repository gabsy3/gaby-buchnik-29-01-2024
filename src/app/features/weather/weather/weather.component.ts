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
import { Observable, startWith, map } from 'rxjs';
import { Weather } from '../../../models/weather.model';

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
  streets: any;
  locations: Weather[] = [];
  weatherService = inject(WeatherService);
  ngOnInit(): void {}
  onKeyUp(e: any) {
    this.weatherService.getLocation(e.target.value).subscribe((res: any) => {
      this.locations = [];
      for (let item of res) {
          this.locations.push(item.LocalizedName);
      }
    });
  }
}
