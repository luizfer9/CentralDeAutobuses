import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferesDialogComponent } from './choferes-dialog.component';

describe('ChoferesDialogComponent', () => {
  let component: ChoferesDialogComponent;
  let fixture: ComponentFixture<ChoferesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoferesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoferesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
