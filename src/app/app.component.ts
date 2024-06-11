import { Component } from '@angular/core';
import { timer,interval, take } from 'rxjs';
import { NavbarComponent }from './navbar/navbar.component';
import { BannerComponent }from './banner/banner.component';
import { AboutusCardComponent } from './aboutus-card/aboutus-card.component'
import { MenuCardComponent } from './menu-card/menu-card.component'
import { ContactusCardComponent } from './contactus-card/contactus-card.component'
import  { ImageCarouselComponent} from './image-carousel/image-carousel.component'
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router ,RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BannerComponent,
    AboutusCardComponent,
    MenuCardComponent,
    ContactusCardComponent,
    ImageCarouselComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  constructor(private responsive: BreakpointObserver) {
    

  }
  title = 'The Proofing Ground';
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
