import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { WeatherModel } from "../weather.model";
import { ConfigService } from "../config.service";


@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit, OnChanges {
    @Input() item!: WeatherModel;
    public temp: string | undefined;

    constructor(public cfg: ConfigService) {}

    ngOnInit(): void {
        console.log('init');
        this.getTemp();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', this.item);
        this.getTemp();
        // console.log('changes', changes);
    }


    public getTemp() {
        this.temp = this.item.temp.toFixed(2);
    }
}