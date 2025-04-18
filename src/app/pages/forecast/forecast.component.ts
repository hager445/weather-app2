import { Component, effect, ElementRef, Inject, inject, Input, Renderer2, ViewChild } from '@angular/core';
import { Iweather } from '../../shared/interface/iweather';
import { WeatherService } from '../../core/services/weather/weather.service';
import { Iforcast } from '../../shared/interface/forcast/iforcast';
import { TimePipe } from '../../shared/pipes/time/time.pipe';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [TimePipe],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {
@Input() forcastData!:Iforcast[];
@Input() index!:number;

constructor(){

}

 


}
