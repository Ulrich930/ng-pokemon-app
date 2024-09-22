import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrl: './details-pokemon.component.css'
})
export class DetailsPokemonComponent implements OnInit {

  pokemonList : Pokemon[];
  pokemon: Pokemon|undefined
  constructor(private route: ActivatedRoute, 
    private router: Router
  ){
    
    }
    ngOnInit(){
      this.pokemonList = POKEMONS;
      const pokemonId: string | null = this.route.snapshot.paramMap.get('id')
      if(pokemonId){
        this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
      }
    }

    goBack() {
      this.router.navigate(['pokemons'])
      }
}
