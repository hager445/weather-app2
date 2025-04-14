import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { WeathercardComponent } from './pages/weathercard/weathercard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeathercardComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
