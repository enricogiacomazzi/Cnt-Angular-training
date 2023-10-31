import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from './config.service';

@Pipe({
  name: 'displayTemp'
})
export class DisplayTempPipe implements PipeTransform {

  transform(value: number, unit: 'celsius' | 'fahrenheit'): string {
    const isCelsius = unit == 'celsius';
    return isCelsius ? this.displayCelsius(value) : this.displayFahrenheit(value);
  }


  private displayCelsius(value: number) {
    return value.toFixed(2) + ' ° C';
  }

  private displayFahrenheit(value: number) {

    const temp = value * 1.8 + 32;
    return temp.toFixed(2) + ' ° F';
  }

}
