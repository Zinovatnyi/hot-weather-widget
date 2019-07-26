import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { hotels$, IHotel } from '../mock';
import { Observable } from 'rxjs';
import { FilterPipePipe } from '../filter-pipe.pipe';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public hotels$: Observable<IHotel[]> = hotels$;
  public hotels: IHotel[] = [];
  public selectedHotel: IHotel;
  public telephoneTransform: any;
  public filterPipePipe: FilterPipePipe;

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

  public toTransformTelephone() {

  }


}
