import { Component,Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NgClass, NgIf ,ViewportScroller} from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule,NgIf,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() mobile = false;
  public menu_id= "menu-section";
  constructor(private scroller: ViewportScroller,) {
    this.scroller.setOffset([0,100])
  }
  
  scrollToElement() {
    this.scroller.scrollToAnchor("menu-section");
  }
  scrollToContactElement() {
    this.scroller.scrollToAnchor("contact-section");
  }
  
  scrollToAboutElement() {
    this.scroller.scrollToAnchor("about-section");
  }
  orderRedirect() {
    window.open("https://theproofingground.cococart.co?utm_source=organic&utm_medium=website&utm_campaign=nav_order&utm_id=12393813481", "_blank",'noopener');
  }



}
