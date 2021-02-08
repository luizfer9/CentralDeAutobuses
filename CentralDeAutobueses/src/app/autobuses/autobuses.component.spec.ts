import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusesComponent } from './autobuses.component';

describe('AutobusesComponent', () => {
  let component: AutobusesComponent;
  let fixture: ComponentFixture<AutobusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutobusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutobusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
