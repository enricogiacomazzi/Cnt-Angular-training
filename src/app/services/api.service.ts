import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';
import { PokemonList, PokemonListItem } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'pkm';
  
  constructor(private http: HttpClient) { }


  public GetPokemons(): Observable<Array<PokemonListItem>> {
    return this.http.get<PokemonList>(this.baseUrl).pipe(map(res => res.results));
  }

  public GetPokemonById(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
