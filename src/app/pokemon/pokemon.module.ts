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
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  {
    path: 'edit/pokemon/:id',
    component: EditPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemon/add',
    component: AddPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemons',
    component:  ListPokemonComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'pokemon/:id',
    component: DetailsPokemonComponent,
    canActivate: [AuthGuard]
  },
];


@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonPipeColorPipe,
    ListPokemonComponent,
    DetailsPokemonComponent,
    PokemonFormComponentComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
