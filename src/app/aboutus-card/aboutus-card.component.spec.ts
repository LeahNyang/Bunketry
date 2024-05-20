import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusCardComponent } from './aboutus-card.component';

describe('AboutusCardComponent', () => {
  let component: AboutusCardComponent;
  let fixture: ComponentFixture<AboutusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
