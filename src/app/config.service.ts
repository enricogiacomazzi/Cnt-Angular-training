import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public tempUnit: 'celsius' | 'fahrenheit' = 'celsius';


  public toggleUnit() {
    if(this.tempUnit == 'celsius') {
      this.tempUnit = 'fahrenheit';
    } else {
      this.tempUnit = 'celsius';
    }
  }

  constructor() { }
}
