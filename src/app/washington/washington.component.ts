import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})

export class WashingtonComponent implements OnInit {
  new : any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.new = {name:"",humidity:"",lowTemp:"",highTemp:"",avgTemp:"",status:""};
    this.getInfo();
  }

  getInfo() {
      let observable = this._httpService.getWashingtonWeather();
      observable.subscribe(info => {
        console.log("Got data from post!", info);
        this.new["name"] = info["name"];
        this.new["humidity"] = info["main"]["humidity"];
        this.new["lowTemp"] = info["main"]["temp_min"];
        this.new["highTemp"] = info["main"]["temp_max"];
        let sum = info["main"]["temp_min"] + info["main"]["temp_max"];
        this.new["avgTemp"] = sum/2;
        this.new["status"] = info["weather"][0]["description"];
      })
  }
}
