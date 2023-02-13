import { Component, OnInit } from '@angular/core';
import { Country } from 'src/models/Country';
import { CountryService } from 'src/service/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  private playedCountries: Country[] = [];
  private notPlayedCountries: Country[] = [];
  public newGame: boolean = false;

  // TO:DO remove this any typing
  public gameCountry: any;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountryList();
  }

  getCountryList(): void {
    this.countryService.getCountries().subscribe((country) => {
      this.notPlayedCountries = country;
    });
  }

  onGetGameCountry(): void {
    // If the user has played all the countries, then reset the arrays
    if(this.notPlayedCountries.length === 0){
      this.notPlayedCountries = this.playedCountries;
      this.playedCountries = [];
    }
    else {
      this.gameCountry = this.notPlayedCountries[Math.floor(Math.random() * this.notPlayedCountries.length)];
      this.playedCountries.push(this.gameCountry);
      this.notPlayedCountries.splice(this.notPlayedCountries.indexOf(this.gameCountry), 1);
    }
    this.newGame = true;
  }

  getGameCountry() : Country{
    return this.gameCountry;
  }
  giveUp() {
    console.log("Game ended");
    this.newGame = false;
  }
}
