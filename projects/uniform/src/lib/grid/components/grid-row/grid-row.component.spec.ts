import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniGridRowComponent } from './grid-row.component';

describe('UniGridRowComponent', () => {
  let component: UniGridRowComponent;
  let fixture: ComponentFixture<UniGridRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniGridRowComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniGridRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
