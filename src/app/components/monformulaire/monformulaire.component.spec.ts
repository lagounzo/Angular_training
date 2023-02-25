import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonformulaireComponent } from './monformulaire.component';

describe('MonformulaireComponent', () => {
  let component: MonformulaireComponent;
  let fixture: ComponentFixture<MonformulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonformulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonformulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
