import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRachelleComponent } from './contact-rachelle.component';

describe('ContactRachelleComponent', () => {
  let component: ContactRachelleComponent;
  let fixture: ComponentFixture<ContactRachelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRachelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactRachelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
