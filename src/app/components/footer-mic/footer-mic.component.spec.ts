import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMicComponent } from './footer-mic.component';

describe('FooterMicComponent', () => {
  let component: FooterMicComponent;
  let fixture: ComponentFixture<FooterMicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
