import { Injectable } from '@angular/core';
import { Country } from 'src/models/Country';

@Injectable()
export class CountryService {
  private countryList: Country[] = [];

  private gameCountry!: Country;
  private playedCountries: Country[] = [];
  private notPlayedCountries: Country[] = [];

  loadCountries(): Promise<void> {
    return fetch('assets/countries.json')
      .then((r) => r.json())
      .then((data: any[]) => {
        this.countryList = data.map(
          (item) =>
            new Country(
              item.code,
              item.name,
              item.capital,
              item.region,
              item.subregion,
              item.population,
              item.languages,
              item.borders,
              item.flag
            )
        );

        this.notPlayedCountries = [...this.countryList];
      });
  }

  constructor() {}

  getGameCountry(): Country {
    return this.gameCountry;
  }

  setGameCountry(): void {
    if (this.gameCountry) {
      const idx = this.notPlayedCountries.indexOf(this.gameCountry);
      if (idx >= 0) {
        this.notPlayedCountries.splice(idx, 1);
      }

      this.playedCountries.push(this.gameCountry);
    }

    if (this.notPlayedCountries.length === 0) {
      this.notPlayedCountries = [...this.countryList];
      this.playedCountries = [];
    }
    this.gameCountry =
      this.notPlayedCountries[
        Math.floor(Math.random() * this.notPlayedCountries.length)
      ];
  }

  getGameCountryHints(): string[] {
    var hints = this.gameCountry.getRandomHint();
    hints.push(this.gameCountry.getBordersHint(this.countryList));
    return hints;
  }
}
