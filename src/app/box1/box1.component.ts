import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusModel } from '../status.model';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Box1Component {
  @Input() pippo!: StatusModel;
  @Output() toggle = new EventEmitter();


  public render() {
    console.log('box 1');
    return '';
  }


  public click() {
    this.toggle.emit();
  }

}
