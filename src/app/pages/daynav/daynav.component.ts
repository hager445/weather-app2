import { Component, effect, inject, Renderer2 } from '@angular/core';

import { WeatherService } from '../../core/services/weather/weather.service';

@Component({
  selector: 'app-daynav',
  imports: [],
  templateUrl: './daynav.component.html',
  styleUrl: './daynav.component.css'
})
export class DaynavComponent {
  private readonly weatherService = inject(WeatherService);
  private readonly renderer = inject(Renderer2);
  
constructor(){

}
changeIndex(i:number):void{
  
this.weatherService.forcastIndex.set(i);
}
selectActive(e:Event):void{
const target = e.target as HTMLElement;
if (target.classList.contains('child')) {
  
  
  document.querySelector('.active')?.classList.remove('active');
  target.classList.add('active');
}

}
}
