import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintListComponent } from './hint-list.component';

describe('HintListComponent', () => {
  let component: HintListComponent;
  let fixture: ComponentFixture<HintListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HintListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
