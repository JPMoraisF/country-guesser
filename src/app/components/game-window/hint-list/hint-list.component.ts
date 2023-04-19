import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hint-list',
  templateUrl: './hint-list.component.html',
  styleUrls: ['./hint-list.component.css']
})
export class HintListComponent {

  @Input('hintList') hintList: string[] = [];

  public askedHints: string[] = [];

  constructor() { }

  getHintsRemaining(): number{
    return this.hintList.length;
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
