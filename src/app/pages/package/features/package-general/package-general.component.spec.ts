import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageGeneralComponent } from './package-general.component';

describe('PackageGeneralComponent', () => {
  let component: PackageGeneralComponent;
  let fixture: ComponentFixture<PackageGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageGeneralComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
