import { Component } from '@angular/core';
import { SearchinputComponent } from "../searchinput/searchinput.component";

import { WeathercardComponent } from '../weathercard/weathercard.component';

import { DaynavComponent } from '../daynav/daynav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchinputComponent, DaynavComponent, WeathercardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
