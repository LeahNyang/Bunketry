import { Component,Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-contactus-card',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './contactus-card.component.html',
  styleUrl: './contactus-card.component.css'
})
export class ContactusCardComponent {
  @Input() mobile = false;
}
