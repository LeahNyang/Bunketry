import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusCardComponent } from './contactus-card.component';

describe('ContactusCardComponent', () => {
  let component: ContactusCardComponent;
  let fixture: ComponentFixture<ContactusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactusCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
