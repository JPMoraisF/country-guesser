import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, of } from "rxjs";
import { Country } from "src/models/Country";

@Injectable()
export class CountryService {

    base_url: string = 'api/countries';

    private countryList: Country[] = [
        new Country(1, "Brazil", "flag-of-brazil", "South America", [
            "I am the biggest country in South America",
            "i don't speak Spanish"
        ]),
        new Country(2, "Argentina", "flag-of-argentina", "South America", [
            "Neighbour of brazil",
            "Quite big too"
        ]),
    ]

    constructor(private httpClient: HttpClient) {
        this.getCountries();
    }

    getCountries(): Observable<Country[]>{
        // return this.httpClient.get<Country[]>(this.base_url);
        return of(this.countryList);
    }
}