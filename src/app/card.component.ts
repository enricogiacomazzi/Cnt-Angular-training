import { AfterContentInit, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div id="card" class="card">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 20px;
  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  `]
})
export class CardComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    const card = document.querySelector('#card');
    console.log('ccc', card?.children);
  }

}
