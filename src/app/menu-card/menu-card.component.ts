import { Component,Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent {
  @Input() mobile = false;
}
