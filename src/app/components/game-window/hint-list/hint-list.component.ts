import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from 'src/service/country.service';

@Component({
  selector: 'app-hint-list',
  templateUrl: './hint-list.component.html',
  styleUrls: ['./hint-list.component.css', '../game-window.component.css']
})
export class HintListComponent {

  private hintList: string[] = [];

  public askedHints: string[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.hintList = this.countryService.getGameCountryHints();
    this.askedHints = [];
  }

  ngOnDestroy(): void {
    this.hintList = [];
  }

  getHintsRemaining(): number{
    return this.hintList.length;
  }

  onNewHintAsked() {
    if(this.hintList.length === 0) {
      console.log('you used all the hints')
    }
    else{
      var nextHint = this.hintList[Math.floor(Math.random() * this.hintList.length)];
      this.askedHints.push(nextHint);
      this.hintList.splice(this.hintList.indexOf(nextHint), 1);
    }
  }
}
