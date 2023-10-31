import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {


  constructor(public srv: WeatherService) {}
  ngAfterViewInit(): void {
    const lista = document.getElementById('lista');
    console.log('lista', lista);
  }

  public render() {
    // console.log('ciao');
    return '';
  }


  public track(index:  number, item: WeatherModel) {
    return item.id;
  }
}
