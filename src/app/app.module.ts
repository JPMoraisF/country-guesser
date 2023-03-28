import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountryService } from 'src/service/country.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HintListComponent } from './components/game-window/hint-list/hint-list.component';
import { AnswersListComponent } from './components/game-window/answers-list/answers-list.component';
import { InMemoryDataService } from '../service/in-memory-data.service';
import { GameWindowComponent } from './components/game-window/game-window.component';
import { AppRoutingModule } from './app-routing.module';
import { GameMenuComponent } from './components/game-menu/game-menu.component'

@NgModule({
  declarations: [
    AppComponent,
    HintListComponent,
    AnswersListComponent,
    GameWindowComponent,
    GameMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
