import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniPillComponent } from './pill.component';

describe('UniPillComponent', () => {
  let component: UniPillComponent;
  let fixture: ComponentFixture<UniPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniPillComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
