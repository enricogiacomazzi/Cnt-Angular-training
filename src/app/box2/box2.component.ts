import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatusModel } from '../status.model';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Box2Component {
  @Input() pippo!: StatusModel;
  public ciao = true;

  public render() {
    console.log('box 2');
    return '';
  }

  public prova() {
    this.ciao = !this.ciao;
  }
}
