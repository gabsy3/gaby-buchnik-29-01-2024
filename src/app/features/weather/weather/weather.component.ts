import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatInputModule , MatFormFieldModule , MatIconModule , MatButtonModule , CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit{
  items = []
  ngOnInit(): void {
  }
 
}
