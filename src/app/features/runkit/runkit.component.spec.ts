import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunkitComponent } from './runkit.component';

describe('RunkitComponent', () => {
  let component: RunkitComponent;
  let fixture: ComponentFixture<RunkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunkitComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
