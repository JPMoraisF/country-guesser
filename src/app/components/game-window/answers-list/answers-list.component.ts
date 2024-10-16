import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { CountryService } from 'src/service/country.service';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css', '../game-window.component.css'],
})
export class AnswersListComponent {
  public answerGivenSubject = new Subject<string>();
  public answerInput: string = '';
  public wrongAnswersList: { text: string; isWrong: boolean }[] = [];
  public answer: string = '';
  public isGameInProgress: boolean = true;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.answer = this.countryService.getGameCountry()?.Name;
  }

  onAnswerGiven() {
    let submittedAnswer = this.answerInput;
    if (submittedAnswer !== '') {
      if (submittedAnswer !== this.answer) {
        this.wrongAnswersList.push({
          text: submittedAnswer,
          isWrong: true,
        });
      } else {
        this.wrongAnswersList.push({
          text: submittedAnswer,
          isWrong: false,
        });
        this.isGameInProgress = false;
        alert('Congratulations');
      }
      this.answerInput = '';
    }
  }
}
