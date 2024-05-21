import { Component,Input } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-aboutus-card',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './aboutus-card.component.html',
  styleUrl: './aboutus-card.component.css'
})
export class AboutusCardComponent {
  @Input() mobile = false;
}
