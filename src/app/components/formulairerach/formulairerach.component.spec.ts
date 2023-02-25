import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairerachComponent } from './formulairerach.component';

describe('FormulairerachComponent', () => {
  let component: FormulairerachComponent;
  let fixture: ComponentFixture<FormulairerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairerachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
