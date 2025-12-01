import { Component } from '@angular/core';
import { CountryService } from 'src/service/country.service';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent {
  public answerInput = '';
  public askedHints: string[] = [];
  public hints: string[] = [];
  public wrongAnswersList: { text: string; isWrong: boolean }[] = [];
  public answer = '';

  public showEndModal = false;
  public endMessage = '';

  constructor(private countryService: CountryService) {}

  async ngOnInit() {
    await this.countryService.loadCountries();
    this.startNewGame();
  }

  startNewGame() {
    this.countryService.setGameCountry();
    this.answer = this.countryService.getGameCountry().Name;

    this.hints = [...this.countryService.getGameCountryHints()];
    this.askedHints = [];
    this.wrongAnswersList = [];
    
    this.showEndModal = false;
    this.answerInput = '';
  }

  triggerEnd(message: string) {
    this.endMessage = message;
    this.showEndModal = true;
  }

  onNewHint() {
    if (this.hints.length === 0) {
      this.triggerEnd(`You lose! The correct answer was: ${this.answer}`);
      return;
    }

    const nextHint = this.hints.shift()!;
    this.askedHints.push(nextHint);
  }
  
  onAnswerGiven() {
    const submitted = this.answerInput.trim().toLowerCase();
    if (!submitted) return;

    if (submitted === this.answer.toLowerCase()) {
     
      this.triggerEnd('You won. Play again?');
    }
    this.wrongAnswersList.push({ text: this.answerInput, isWrong: true });
    this.answerInput = '';
  }
}
