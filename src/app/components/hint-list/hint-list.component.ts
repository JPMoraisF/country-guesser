import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/models/Country';

@Component({
  selector: 'app-hint-list',
  templateUrl: './hint-list.component.html',
  styleUrls: ['./hint-list.component.css']
})
export class HintListComponent implements OnInit {
  // TO-DO: remove any typing
  @Input('gameCountry') gameCountry!: Country;

  private hintList:string[] = [];

  public askedHints: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.hintList = this.gameCountry.Hints;
  }

  onNewHintAsked() {
    if(this.hintList.length === 0){
      console.log('you used all the hints');
    }
    else {

      var nextHint = this.hintList[Math.floor(Math.random() * this.hintList.length)];
      this.askedHints.push(nextHint);
      this.hintList.splice(this.hintList.indexOf(nextHint), 1);
    }
  }
}
