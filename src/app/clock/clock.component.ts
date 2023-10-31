import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnDestroy {
  public time: string | undefined;

  public ref: any;

  constructor() {
    this.ref = setInterval(() => {

      this.time = new Date().toLocaleTimeString();
      console.log('tick');

    }, 400);
  }
  ngOnDestroy(): void {
    console.log('destroy');
    if(this.ref) {
      clearInterval(this.ref);
    }
  }


}
