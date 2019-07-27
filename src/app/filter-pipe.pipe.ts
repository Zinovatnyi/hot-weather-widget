import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from './mock';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  public transform(phone: number): string {
        return String(phone).replace(/(\d{2})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
  }
}
