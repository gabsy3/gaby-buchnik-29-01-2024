import { Component, OnInit, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { WeatherService } from '../../../services/weather.service';

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
    ReactiveFormsModule
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  streets = [];
  weatherService = inject(WeatherService);
  textInput: any = "Tel Aviv";
  ngOnInit(): void {
    this.weatherService.getLocation(this.textInput).subscribe(data => console.log(data));
  }
}
