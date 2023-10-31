import { Injectable } from "@angular/core";
import { WeatherModel } from "./weather.model";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    public temps: Array<WeatherModel> = [
        {id: 1, city: 'Rome', temp: 18},
        {id: 2, city: 'Milan', temp: 12},
        {id: 3, city: 'Turin', temp: 13},
        {id: 4, city: 'Busto arsizio', temp: 8},
        {id: 5, city: 'Florence', temp: 16},
        {id: 6, city: 'Naples', temp: 23},
      ];

    constructor() {
        this.getData();
    }


  public getData() {
    const cities = ['Rome',
    'Milan',
    'Turin',
    'Busto arsizio',
    'Florence',
    'Naples'];


    this.temps = cities.map((city, i) => ({id: i + 1, city, temp: Math.random() * 30 - 10}));
  }
}
