import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersListComponent } from './answers-list.component';

describe('AnswersListComponent', () => {
  let component: AnswersListComponent;
  let fixture: ComponentFixture<AnswersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
