import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreIconComponent } from './score-icon.component';

describe('ScoreIconComponent', () => {
  let component: ScoreIconComponent;
  let fixture: ComponentFixture<ScoreIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreIconComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
