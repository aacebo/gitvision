import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniGridColumnComponent } from './grid-column.component';

describe('UniGridColumnComponent', () => {
  let component: UniGridColumnComponent;
  let fixture: ComponentFixture<UniGridColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniGridColumnComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniGridColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
