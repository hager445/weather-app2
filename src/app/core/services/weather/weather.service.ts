import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   private readonly http = inject(HttpClient)
  constructor() { }
  getCountryWeather(countryName:string):Observable<any>{
   return this.http.get(`http://api.weatherapi.com/v1/current.json?key=d1174cdf60e44e398f5154148251304&q=${countryName}`);
  }
}
