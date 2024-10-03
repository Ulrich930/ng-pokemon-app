import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { response } from 'express';


@Injectable()
export class PokemonService {
  constructor(private http: HttpClient){}


  getPokemonList(): Observable<Pokemon[]> {
    //return POKEMONS
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error)  => this.handleError(error, []))
    )
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    //return POKEMONS.find(pokemon => pokemon.id == pokemonId)
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, []))
    )
  }

  searchPokemonList(term: string): Observable<Pokemon[]>{
    if(term.length <= 1){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>  this.handleError(error, []))
    )

  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon|undefined>{
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put('api/pokemons', pokemon, httpoptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>  this.handleError(error, undefined))
    )
  }

  deletePokemon(pokemonId: number): Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>  this.handleError(error, null))
    )
  }

  private log(response: any){
    console.table(response)
  }

  private handleError(error : Error, errorValue: any){
    console.error(error);
    return of(errorValue)
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Pokemon>('api/pokemons', pokemon, httpoptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>  this.handleError(error, null))
    )
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ]
  }
}
