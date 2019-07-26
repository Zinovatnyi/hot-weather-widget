import { Component, ViewEncapsulation, OnInit, Output } from '@angular/core';
import { hotels$, IHotel, IWeather, ISocial } from './mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent  {
  public currentHotel: IHotel;

  public setControl(currentHotel: IHotel) {
    Promise.resolve().then(() => {
      this.currentHotel = currentHotel;
      }
    );
  }
}
