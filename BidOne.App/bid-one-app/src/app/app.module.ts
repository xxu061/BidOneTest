import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './states/personState';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffect } from './effects/personEffect';
import { RouterModule } from '@angular/router';
import { PersonService } from './services/personService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PersonEffect])
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
