import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniGridComponent } from './grid.component';

describe('UniGridComponent', () => {
  let component: UniGridComponent;
  let fixture: ComponentFixture<UniGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniGridComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
