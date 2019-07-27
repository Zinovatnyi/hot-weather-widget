import { Component } from '@angular/core';
import { IHotel } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
