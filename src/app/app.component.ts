import { Component } from '@angular/core';
import { NavbarComponent }from './navbar/navbar.component';
import { BannerComponent }from './banner/banner.component';
import { AboutusCardComponent } from './aboutus-card/aboutus-card.component'
import { MenuCardComponent } from './menu-card/menu-card.component'
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BannerComponent,
    AboutusCardComponent,
    MenuCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private responsive: BreakpointObserver) {

  }
  title = 'bunketry';
  mobile = false;
  ngOnInit() {

    this.responsive.observe([
      Breakpoints.Medium,Breakpoints.Small,Breakpoints.XSmall])
      .subscribe(result => {
        if (result.matches) {
          this.mobile = true;
        } else {
          this.mobile = false;
        }

      });

  }

}
