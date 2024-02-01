import { Component, OnInit, inject } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit{
  weatherService = inject(WeatherService);
  readonly state = this.weatherService.wsState;

  ngOnInit(): void {
  }
  
}
