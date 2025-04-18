import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Iweather } from '../../../shared/interface/iweather';
import { Iforcast } from '../../../shared/interface/forcast/iforcast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   private readonly http = inject(HttpClient);
   cityName= signal<string>('cairo');
   forcastIndex= signal<number>(0);

  
  constructor() { }
  getCountryForecast(cityName:string):Observable<any>{
   return this.http.get(`https://api.weatherapi.com/v1/forecast.json?key=d1174cdf60e44e398f5154148251304&q=${cityName}&days=3`);
  }
}
