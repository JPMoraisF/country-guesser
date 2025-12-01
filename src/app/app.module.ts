import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountryService } from 'src/service/country.service';

import { AppComponent } from './app.component';
import { GameWindowComponent } from './components/game-window/game-window.component';
import { AppRoutingModule } from './app-routing.module';
import { GameMenuComponent } from './components/game-menu/game-menu.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameWindowComponent,
    GameMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
