import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserBeforaAndAfterDialogComponent } from './user-befora-and-after-dialog/user-befora-and-after-dialog.component';

@NgModule({
  declarations: [
    UsersCardListComponent,
    UserFormComponent,
    UserBeforaAndAfterDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularMaterialModule,
    DirectivesModule,
    PipesModule,
    HttpClientModule
  ],
  exports: [
    UsersCardListComponent,
    UserFormComponent
  ]
})
export class ComponentsModule { }
