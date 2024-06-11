import { Component,Input,inject  } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { AboutusCardComponent } from '../aboutus-card/aboutus-card.component'
import { MenuCardComponent } from '../menu-card/menu-card.component'
import { ContactusCardComponent } from '../contactus-card/contactus-card.component'
import  { ImageCarouselComponent} from '../image-carousel/image-carousel.component'
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [    
    NgClass, NgIf,
    AboutusCardComponent,
    MenuCardComponent,
    ContactusCardComponent,
    ImageCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent {
 
  mobile = false;
  constructor(private responsive: BreakpointObserver) {

  }
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

