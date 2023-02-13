import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Country } from "src/models/Country";

@Injectable()
export class CountryService {

    base_url: string = 'api/countries';

    constructor(private httpClient: HttpClient) {
        this.getCountries();
    }

    getCountries(): Observable<Country[]>{
        return this.httpClient.get<Country[]>(this.base_url);
    }
}