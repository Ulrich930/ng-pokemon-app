import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonPipeColorPipe } from './pokemon-pipe-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule} from '@angular/forms';
import { PokemonFormComponentComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
const pokemonRoutes: Routes = [
  {
    path: 'edit/pokemon/:id',
    component: EditPokemonComponent
  },
  {
    path: 'pokemons',
    component:  ListPokemonComponent
  },
  
  {
    path: 'pokemon/:id',
    component: DetailsPokemonComponent
  },
];


@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonPipeColorPipe,
    ListPokemonComponent,
    DetailsPokemonComponent,
    PokemonFormComponentComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
