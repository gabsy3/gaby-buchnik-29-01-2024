import { Component, OnInit, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WeatherService } from '../../../services/weather.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-conditions',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './current-conditions.component.html',
  styleUrl: './current-conditions.component.scss',
})
export class CurrentConditionsComponent implements OnInit {
  weatherService = inject(WeatherService);
  readonly state = this.weatherService.wsState;
  toastr = inject(ToastrService);

  constructor(){
    effect(()=>{
      this.loadCurrentConditions();
     })
  }
  ngOnInit(): void {
    this.loadCurrentConditions();
  }
  loadCurrentConditions() {
    this.weatherService.getCurrentConditions(this.state.id()).subscribe({
      next: async (data: any) => {
        await this.weatherService.setCurrentConditions(
          this.state.id(),
          this.state.city(),
          data[0]
        );
        this.weatherService.isFavorite(this.state.id());
      },
      error: (err) => {
        this.toastr.error(err.message, 'getCurrentConditions');
      },
    });
  }
  favoriteClick() {
    if (this.state.favorite()) {
      this.weatherService.removeFromFavorite(this.state.id());
      this.toastr.info('favorite removed', 'remove favorite');
    } else {
      this.weatherService.addToFavorite(this.state.id());
      this.toastr.success('favorite added success', 'add favorite');
    }
  }
}
