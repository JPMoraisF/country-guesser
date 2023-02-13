import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Country } from 'src/models/Country';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const countries = [
      {
        "id": 1,
        "Name": "Brazil",
        "Flag": "flag-of-brazil",
        "region": "South America",
        "Hints": [
          "Biggest country in south america"
        ]
      },
      {
        "id": 2,
        "Name": "Peru",
        "Flag": "flag-of-peru",
        "region": "South America",
        "Hints": [
          "Named after an edible bird"
        ]
      },
      {
        "id": 3,
        "Name": "Bolivia",
        "Flag": "flag-of-bolivia",
        "region": "South America",
        "Hints": [
          "Landlocked country in south america"
        ]
      },
      {
        "id": 4,
        "Name": "Japan",
        "Flag": "flag-of-japan",
        "region": "Asia",
        "Hints": [
          "Known as the land of the rising sun"
        ]
      },
      {
        "id": 4,
        "Name": "Canada",
        "Flag": "flag-of-canada",
        "region": "North America",
        "Hints": [
          "Northernmost country in north america",
          "Land of Maple Syrup"
        ]
      },
      {
        "id": 4,
        "Name": "Mexico",
        "Flag": "flag-of-mexico",
        "region": "North America",
        "Hints": [
          "The meteor that killed the dinosaurs hit this country 66 million years ago"
        ]
      }
    ];
    return { countries };
  }

  genId(countries: Country[]): number {
    return countries.length > 0 ? Math.max(...countries.map(country => country.id)) + 1 : 11;
  }
  constructor() { }
}
