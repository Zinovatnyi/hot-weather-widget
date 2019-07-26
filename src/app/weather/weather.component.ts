import { Component, OnInit, Input } from '@angular/core';
import { IHotel, IWeather } from '../mock';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  public currentHotel: IHotel;

  constructor() {
      }

  ngOnInit() {
  }

}
