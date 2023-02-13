import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountryService } from 'src/service/country.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HintListComponent } from './components/hint-list/hint-list.component';
import { AnswersListComponent } from './components/answers-list/answers-list.component';
import { InMemoryDataService } from '../service/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HintListComponent,
    AnswersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
