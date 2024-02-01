import { Component, OnInit, inject } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent{
  weatherService = inject(WeatherService);
  readonly state = this.weatherService.wsState;
  route = inject(Router)
  
  goTomain(city:string){
    this.route.navigate(['/home'],{queryParams:{data:city}})
  }
}
