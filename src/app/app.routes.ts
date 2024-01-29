import { Routes } from '@angular/router';
import { FavoritesComponent } from './features/favorites/favorites/favorites.component';
import { WeatherComponent } from './features/weather/weather/weather.component';

export const routes: Routes = [
    {path: '', component: WeatherComponent},
    {path: 'home', component: WeatherComponent},
    {path: 'favorites', component: FavoritesComponent}
];
