import { Component, OnInit, Input } from '@angular/core';
import { IHotel, IWeather } from '../mock';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent implements OnInit {

  @Input()
  public currentHotel: IHotel;

  constructor() { }

  ngOnInit() {
  }

}
