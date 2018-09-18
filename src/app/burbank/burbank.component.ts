import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  new : any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.new = {name:"",humidity:"",lowTemp:"",highTemp:"",avgTemp:"",status:""};
    this.getInfo();
  }

  getInfo() {
      let observable = this._httpService.getBurbankWeather();
      observable.subscribe(info => {
        console.log("Got data from post!", info);
        this.new["name"] = info["name"];
        this.new["humidity"] = info["main"]["humidity"];
        let sum = info["main"]["temp_min"] + info["main"]["temp_max"];
        this.new["avgTemp"] = sum/2;
        this.new["lowTemp"] = info["main"]["temp_min"];
        this.new["highTemp"] = info["main"]["temp_max"];
        this.new["status"] = info["weather"][0]["description"];
      })
  }
}
