import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponentComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  constructor(
    private router: Router,
    private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type)
  }

  selectType($event: Event, type: string){
    const isChecked = ($event.target as HTMLInputElement).checked

    if(isChecked) {
      this.pokemon.types.push(type)
    } else {
      const index = this.pokemon.types.indexOf(type)
      this.pokemon.types.splice(index, 1)

    }
  }

  isTypesValid(type: string): boolean {
    //console.log(this.pokemon.types)
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    } else if (this.pokemon.types.length > 2 && !this.hasType(type)){
      return false
    } else {
      return true
    }
  }

  onSubmit(){
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id])
  }
}
