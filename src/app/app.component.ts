import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { WeatherModel } from './weather.model';
import { ListComponent } from './list/list.component';
import { WeatherService } from './weather.service';
import { ClockComponent } from './clock/clock.component';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-pippo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public clockVisible: boolean = false;

  // private service: WeatherService;


  constructor(public service: WeatherService, public cfg: ConfigService) {
    // this.service = service;
  }


  public toggleClock() {
    this.clockVisible = !this.clockVisible;
  }


  // @ViewChild(ListComponent, {static: true}) list!: ListComponent;
  // public temps: Array<WeatherModel>;

  // constructor() {
  //   const srv = new WeatherService();
  //   this.temps = srv.temps;
  // }

  // public temps: Array<WeatherModel> = [
  //   {id: 1, city: 'Rome', temp: 18},
  //   {id: 2, city: 'Milan', temp: 12},
  //   {id: 3, city: 'Turin', temp: 13},
  //   {id: 4, city: 'Busto arsizio', temp: 8},
  //   {id: 5, city: 'Florence', temp: 16},
  //   {id: 6, city: 'Naples', temp: 23},
  // ];


  // public getData() {
  //   this.service.getData();
  //   // this.list.getData();

  //   // console.log(this.list);
  // }
}
