import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/models/Country';
import { CountryService } from 'src/service/country.service';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent {
  public answerGiven: string[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.setGameCountry();
  }

  ngOnDestroy(): void {
  }

  
}
