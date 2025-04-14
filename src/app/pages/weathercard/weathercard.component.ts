import { Component, inject } from '@angular/core';
import { WeatherService } from '../../core/services/weather/weather.service';

@Component({
  selector: 'app-weathercard',
  standalone: true,
  imports: [],
  templateUrl: './weathercard.component.html',
  styleUrl: './weathercard.component.css'
})
export class WeathercardComponent {
  private readonly weatherData = inject(WeatherService)
  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getWeatherData();
  }
getWeatherData():void{
  this.weatherData.getCountryWeather('london').subscribe({
    next:(res)=>{
    console.log(res);
    
    }
  })
}
}
