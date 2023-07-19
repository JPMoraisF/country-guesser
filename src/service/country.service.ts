import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, of } from "rxjs";
import { Country } from "src/models/Country";

@Injectable()
export class CountryService {

    base_url: string = 'api/countries';

    private countryList: Country[] = [
        new Country(1, "BRAZIL", "flag-of-brazil", "South America", [
            "I am the biggest country in South America",
            "i don't speak Spanish",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I cant't reach the pacific Ocean",
            "I'm not a landlocked country",
        ]),
        // new Country(2, "Argentina", "flag-of-argentina", "South America", [
        //     "Neighbour of brazil",
        //     "My country reach as south as Antarctica",
        //     "My name comes from a metal"
        // ]),
        // new Country(3, "Peru", "flag-of-peru", "South America", [
        //     "Named after a bird in my native language",
        //     "I am very close to the Equator",
        //     "I speak spanish"
        // ]),
    ]

    private gameCountry!: Country;
    private playedCountries: Country[] = [];
    private notPlayedCountries: Country[] = [];

    constructor(private httpClient: HttpClient) { }

    getCountries(): Observable<Country[]> {
        // return this.httpClient.get<Country[]>(this.base_url);
        return of([...this.countryList]);
    }

    getGameCountry(): Country {
        return this.gameCountry;
    }

    setGameCountry(): void {
        if (this.notPlayedCountries.length === 0) {
            this.notPlayedCountries = this.countryList;
            this.playedCountries = [];
        }
        else {
            this.playedCountries.push(this.gameCountry);
            this.notPlayedCountries.slice(this.notPlayedCountries.indexOf(this.gameCountry), 1);
        }
        this.gameCountry = this.notPlayedCountries[Math.floor(Math.random() * this.notPlayedCountries.length)];
    }

    getGameCountryHints(): string[] {
        return [...this.gameCountry.Hints];
    }
}