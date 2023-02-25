import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjoumaniComponent } from './adjoumani.component';

describe('AdjoumaniComponent', () => {
  let component: AdjoumaniComponent;
  let fixture: ComponentFixture<AdjoumaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjoumaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjoumaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
