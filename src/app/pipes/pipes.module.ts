import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreDescriptionPipe } from './genre-description.pipe';
import { StateDescriptionPipe } from './state-description.pipe';
import { IsFavoriteDescriptionPipe } from './is-favorite-description.pipe';



@NgModule({
  declarations: [
    GenreDescriptionPipe,
    StateDescriptionPipe,
    IsFavoriteDescriptionPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenreDescriptionPipe,
    StateDescriptionPipe,
    IsFavoriteDescriptionPipe,
  ]
})
export class PipesModule { }
