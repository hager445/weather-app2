import { Component, effect, inject, signal } from '@angular/core';
import { WeatherService } from '../../core/services/weather/weather.service';
import { Iweather } from '../../shared/interface/iweather';
import { ForecastComponent } from '../forecast/forecast.component';
import { Iforcast } from '../../shared/interface/forcast/iforcast';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-weathercard',
  standalone: true,
  imports: [ForecastComponent ,RouterModule],
  templateUrl: './weathercard.component.html',
  styleUrl: './weathercard.component.css'
})
export class WeathercardComponent {
  private readonly weatherData = inject(WeatherService);
  private readonly route = inject(ActivatedRoute);
  data:Iweather= {} as Iweather;
  forcast:Iforcast[]=[];
  icon:string = '';
  forcastIndex!:number;
  constructor(){
    effect(()=>{
      this.forcastIndex = this.weatherData.forcastIndex();
      const query = this.weatherData.cityName();
      if (query) {
       this.getWeatherData(query);
      }
   })
  }
  ngOnInit(): void {
  }
  getWeatherData(city:string):void{

this.weatherData.getCountryForecast(city).subscribe({
  next:(res)=>{
      this.data = res;
      console.log(res);
      
      this.forcast = res.forecast.forecastday;
        }
  })
}
}
