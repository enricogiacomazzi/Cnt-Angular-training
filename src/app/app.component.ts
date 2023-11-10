import { AfterViewInit, Component } from '@angular/core';
import { Observable, Subscription, from, fromEvent, of, tap, EMPTY, NEVER, throwError, timeout, timer, interval, map, mapTo, reduce, scan, range, bufferTime, bufferCount, filter, take, skip, startWith, endWith, catchError, delay, merge, concat, combineLatest, forkJoin, last, withLatestFrom, switchMap, toArray, mergeAll, mergeMap, concatMap, throttle, throttleTime, exhaustMap } from 'rxjs';
import {ajax} from 'rxjs/ajax';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private sub!: Subscription;
  public pokemons: Array<any> = [];
  public showList = true;

  constructor() {
    // const arr = [1, 2, 3, 4];

    // const o1 = of(42);

    // const o1 = new Observable(o => {
    //   for(let v of arr) {
    //     o.next(v);
    //   }

    //   o.complete();
    // })

    // const o1 = from(arr);

    // const o1 = from(this.gen1());

    // const o1 = from(fetch('https://jsonplaceholder.typicode.com/users/1'));

    // const obs$ = new Observable(o => {
    //   o.next(2);
    //   o.next(3);
    //   o.complete();
    //   o.error(new Error('mio errore'));

    //   return () => {
    //     console.log('release');
    //   }

    // });

    // const o1 = new Observable(o => {
    //   o.complete();
    // });

    // const o1 = throwError(() => new Error('caasdsadas'));




  }
  ngAfterViewInit(): void {
    // const btn = document.getElementById('btn');
    // if(!btn) {
    //   return;
    // }

    // const o1 = fromEvent(btn, 'click').pipe(tap(x => console.log('click')));

    // const o1 = new Observable(o => {

    //   const handler = () => {
    //     console.log('click internal');
    //     o.next('click');
    //   };

    //   btn?.addEventListener('click',handler);

    //   return () => {
    //     btn?.removeEventListener('click', handler);
    //   }
    // })

    // this.sub = o1.subscribe({
    //   next: x => console.log('next', x),
    //   error: err => console.log('err', err),
    //   complete: () => console.log('completed')
    // });
  }

  private * gen1() {
    for(let i = 0; i < 10; i++) {
      yield i;
    }
  }

  public dwld() {
    // const o1 = from(fetch('https://swapi.dev/api/people/1')
    //   .then(x => x.json())
    //   .then(x => {
    //     console.log('req', x);
    //     return x;
    //   }));
    
    // const o1 = ajax('https://swapi.dev/api/people/1');

    // const o1 = new Observable(o => {
    //   const ac = new AbortController();
    //   fetch('https://swapi.dev/api/people/1', {signal: ac.signal}).then(x => {
    //     o.next(x);
    //   }).catch(err => {
    //     // if(instanceof err === AbortError) {
    //     //   return;
    //     // }


    //     o.error(err);
    //   });

    //   return () => {
    //     ac.abort();
    //   }
    // });

    // console.log('start');

    // const o1 = fromEvent(document, 'click').pipe(scan((a, x) => a + 1, 0));


    // const o2 = interval(100); // .pipe(take(20));

    // const o1 = interval(100).pipe(map(x => `a${x}`), take(3));
    // const o2 = interval(100).pipe(delay(500), map(x => `b${x}`), take(6));

    // const o1 = throwError(() => 'errore'); //  interval(1000);

    // const o2 = o1.pipe(catchError(err => NEVER), startWith(-1), take(10), endWith(1000));

    // const o3 = o1.pipe(withLatestFrom(o2)); //  combineLatest([o1, o2]);

    // const o3 = o2.pipe(toArray());
    
    // this.sub = o3.subscribe({
    //   next: x => console.log('next', x),
    //   error: err => console.log('err', err),
    //   complete: () => console.log('completed')
    // });
  }

  public unsub() {
    this.sub.unsubscribe();

  }

  public toggle() {
    this.showList = !this.showList;
  }
}
