import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  new : any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.new = {name:"",humidity:"",lowTemp:"",highTemp:"",avgTemp:"",status:""};
    this.getInfo();
  }

  getInfo() {
      let observable = this._httpService.getSeattleWeather();
      observable.subscribe(info => {
        console.log("Got data from post!", info["weather"][0]["description"]);
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
