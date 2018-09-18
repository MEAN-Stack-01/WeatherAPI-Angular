import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getSeattleWeather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=cc6c400481de8c1859a190a1cab10c92');
  }

  getWashingtonWeather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Washington&APPID=cc6c400481de8c1859a190a1cab10c92');
  }

  getBurbankWeather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&APPID=cc6c400481de8c1859a190a1cab10c92');
  }

  getSanJoseWeather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=95115&APPID=cc6c400481de8c1859a190a1cab10c92');
  }

  getDallasWeather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=dallas&APPID=cc6c400481de8c1859a190a1cab10c92');
  }

  getChicagoWeather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=chicago&APPID=cc6c400481de8c1859a190a1cab10c92');
  }




}
