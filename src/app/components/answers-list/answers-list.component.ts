import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent {
  public answerGivenSubject = new Subject<string>();
  public wrongAnswersList: string[] = [];
  
  onAnswerGiven(answerGiven: HTMLInputElement){
    let answer = answerGiven.value;
    this.answerGivenSubject.next(answer);
    this.wrongAnswersList.push(answer);
  }
}
