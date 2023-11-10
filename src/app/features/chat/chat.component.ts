import { Component } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { nanoid } from 'nanoid';
import { Observable, Subject, Subscription, filter, merge, scan, tap } from 'rxjs';

@Component({
  selector: 'app-chat',
  template: `
    <button (click)="connect()">{{isOpen ? 'disconnect' : 'connect'}}</button><br/>
    <input [disabled]="!isOpen" type="text" placeholder="type new message" (keyup.enter)="send($event)"/>
    <button (click)="clear$.next(undefined)">clear</button><br/>
    <ul *ngIf="isOpen">
      <li *ngFor="let m of messages$ | async">{{m.message}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class ChatComponent {
  private id = nanoid();
  public ws$ = webSocket("ws://localhost:3000/ws/" + this.id);
  public isOpen = false;

  public messages$!: Observable<Array<any>>;
  public clear$ = new Subject();


  constructor() {
    this.messages$ = merge(this.ws$, this.clear$).pipe(
      tap(x => console.log('aaa',x)),
      filter((x: any) => x?.sender !== this.id),
      scan((a, x) => x === undefined ? [] : [...a, x], [] as any[]));
  }


  public connect() {
    this.isOpen = ! this.isOpen;
  }

  public send(e: Event) {
    if(!this.isOpen) {
      return;
    }
    const target = e.target as HTMLInputElement;
    this.ws$.next(target.value);
    target.value = '';
  }
}
