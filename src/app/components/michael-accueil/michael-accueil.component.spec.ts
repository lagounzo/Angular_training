import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaelAccueilComponent } from './michael-accueil.component';

describe('MichaelAccueilComponent', () => {
  let component: MichaelAccueilComponent;
  let fixture: ComponentFixture<MichaelAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MichaelAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MichaelAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
