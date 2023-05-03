import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { CountryService } from 'src/service/country.service';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css', '../game-window.component.css']
})
export class AnswersListComponent {
  public answerGivenSubject = new Subject<string>();
  public wrongAnswersList: string[] = [];
  public answerInput: string = "";
  public answer: String = "";

  constructor(private countryService: CountryService) {
    
    
  }

  ngOnInit(){
     this.answer = this.countryService.getGameCountry()?.Name;
  }
  
  onAnswerGiven(){
    let submittedAnswer = this.answerInput
    if(submittedAnswer !== ""){
      if(submittedAnswer !== this.answer){
        submittedAnswer = submittedAnswer + " X ";
        this.answerGivenSubject.next(submittedAnswer);
        this.wrongAnswersList.push(submittedAnswer);
        this.answerInput = "";
      }
      else {
        alert('Congratulations')
      }
    }
  }
}
