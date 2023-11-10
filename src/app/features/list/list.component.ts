import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonListItem } from 'src/app/models/pokemon.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let p of pokemons$ | async">
        <a (click)="gotoPage(p)">{{p.name}}</a>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ListComponent {

  public pokemons$: Observable<Array<PokemonListItem>>;

  constructor(public api: ApiService, private router: Router) {
    this.pokemons$ = this.api.GetPokemons();
  }

  public gotoPage(pk: {name: string, url: string}) {

    const { url } = pk;

    const pos = url.indexOf('pokemon');
    const id = url.substring(pos + 'pokemon'.length).replace(/\//g, '');

    this.router.navigate(['pokemon', id]);

  }

}
