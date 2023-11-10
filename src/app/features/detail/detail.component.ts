import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  template: `
  <ng-container *ngIf="pokemon$ | async as p">
    <ul>
      <li>name: {{p.name}}</li>
      <li>weight: {{p.weight}}</li>
      <li>height: {{p.height}}</li>
    </ul>

    <button (click)="nextDetail(p)">next</button>
  </ng-container>

  `,
  styles: [
  ]
})
export class DetailComponent {
  public pokemon$: Observable<any>;

  constructor(private ar: ActivatedRoute, public api: ApiService, private router: Router) {
    this.pokemon$ = this.ar.params.pipe(
      map(x => x['gino'] as string),
      switchMap(id => this.api.GetPokemonById(id))
      );


      this.ar.queryParams.subscribe(x => {
        console.log('query', x);
      });
  }

  public nextDetail(p: any) {
    const id = p['id'];
    const nextId = id + 1;
    this.router.navigate(['pokemon', nextId]);
  }

}
