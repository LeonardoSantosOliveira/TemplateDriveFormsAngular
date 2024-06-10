import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MAT_DATE_LOCALE } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
