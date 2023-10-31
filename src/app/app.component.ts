import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { WeatherModel } from './weather.model';
import { ListComponent } from './list/list.component';
import { WeatherService } from './weather.service';
import { ClockComponent } from './clock/clock.component';
import { ConfigService } from './config.service';
import { StatusModel } from './status.model';

@Component({
  selector: 'app-pippo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public pippo: StatusModel = {visible: false};

  public toggle() {

    this.pippo = {
      visible: !this.pippo.visible
    }
    console.log(this.pippo);
  }
}
