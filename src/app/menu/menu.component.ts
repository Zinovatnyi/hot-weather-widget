import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { hotels$, IHotel } from '../mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public hotels$: Observable<IHotel[]> = hotels$;
  public hotels: IHotel[] = [];
  public selectedHotel: IHotel;

  @Output()
  public setMenuControl = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.hotels$.subscribe((hotels: IHotel[]) => {
    this.hotels = hotels;
    });
  }

  public onHotelSelected(hotel: IHotel) {
    this.selectedHotel = hotel;
    this.setMenuControl.emit(this.selectedHotel);
  }
}
