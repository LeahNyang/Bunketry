import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusCarouselComponent } from './aboutus-carousel.component';

describe('AboutusCarouselComponent', () => {
  let component: AboutusCarouselComponent;
  let fixture: ComponentFixture<AboutusCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutusCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
