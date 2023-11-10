import { Component, OnDestroy } from '@angular/core';
import { interval, startWith, switchMap, map, mergeMap, toArray, tap, Subscription, Subject, takeUntil, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

interface PkType {
  name: string;
  url: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnDestroy {
  public pokemons: Array<any> = [];
  public pokemons$!: Observable<Array<any>>;
  // public sj$ = new Subject();

  // private sub = new Subscription;
  constructor() {
    this.pokemons$ = interval(1000).pipe(
      startWith(undefined),
      switchMap(() => ajax('https://pokeapi.co/api/v2/pokemon').pipe(
        map((x: any) => x.response['results'] as Array<PkType>),
        mergeMap(x => x),
        mergeMap(pk => ajax(pk.url)),
        map(z => z.response),
        toArray(),
        tap(x => console.log(x))
      ))
    );

    // req.subscribe(x => {
    //   this.pokemons = x;
    // });
    
  }
  ngOnDestroy(): void {
    // this.sj$.next(undefined);
    // this.sub.unsubscribe();
  }

}
