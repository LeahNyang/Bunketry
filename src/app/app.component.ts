import { Component } from '@angular/core';
import { NavbarComponent }from './navbar/navbar.component';
import { BannerComponent }from './banner/banner.component';
import { AboutusCardComponent } from './aboutus-card/aboutus-card.component'

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BannerComponent,
    AboutusCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bunketry';

}
