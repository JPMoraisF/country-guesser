import { Component } from '@angular/core';
import { Country } from 'src/models/Country';
import { CountryService } from 'src/service/country.service';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent {
  public gameCountry!: Country;
  private playedCountries: Country[] = [];
  private notPlayedCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountryList();
    this.getNewCountry();
    console.log(this.gameCountry);
  }

  getCountryList(): void {
    this.countryService.getCountries().subscribe((country) => {
      this.notPlayedCountries = country;
    });
  }

  getNewCountry(){
    if(this.notPlayedCountries.length === 0){
      this.notPlayedCountries = this.playedCountries;
      this.playedCountries = [];
    }
    else {
      this.gameCountry = this.notPlayedCountries[Math.floor(Math.random() * this.notPlayedCountries.length)];
      console.log(this.gameCountry);
      this.playedCountries.push(this.gameCountry);
      this.notPlayedCountries.splice(this.notPlayedCountries.indexOf(this.gameCountry), 1);
    }
  }
}
