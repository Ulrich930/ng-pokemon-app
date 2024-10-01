import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrl: './details-pokemon.component.css'
})
export class DetailsPokemonComponent implements OnInit {

  pokemonList : Pokemon[];
  pokemon: Pokemon|undefined
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ){
    
    }
    ngOnInit(){
      
      const pokemonId: string | null = this.route.snapshot.paramMap.get('id')
      if(pokemonId){
        this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
      }
    }

    deletePokemon(pokemon: Pokemon) {
      this.pokemonService.deletePokemon(pokemon.id)
      .subscribe(() => this.goBack());
    }

    goBack() {
      this.router.navigate(['pokemons'])
      }
    gotToEditPokemon(pokemon: Pokemon){
      this.router.navigate(['/edit/pokemon', pokemon.id])
    }
}
