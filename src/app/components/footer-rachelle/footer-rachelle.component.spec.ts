import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRachelleComponent } from './footer-rachelle.component';

describe('FooterRachelleComponent', () => {
  let component: FooterRachelleComponent;
  let fixture: ComponentFixture<FooterRachelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRachelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterRachelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
