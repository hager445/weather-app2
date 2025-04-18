import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../core/services/weather/weather.service';

@Component({
  selector: 'app-searchinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchinput.component.html',
  styleUrl: './searchinput.component.css'
})
export class SearchinputComponent {
  private readonly weatherData = inject(WeatherService)
inputValue :string = '';
typeInputValue(){
  this.weatherData.cityName.set(this.inputValue);
  console.log(this.weatherData.cityName());
}

}
