import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemCardComponent } from './search-item-card.component';

describe('SearchItemCardComponent', () => {
  let component: SearchItemCardComponent;
  let fixture: ComponentFixture<SearchItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchItemCardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
