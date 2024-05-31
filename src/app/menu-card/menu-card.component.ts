import { Component,Input } from '@angular/core';
import { timer,interval, take } from 'rxjs';

import  { ImageCarouselComponent} from '../image-carousel/image-carousel.component'
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [NgClass, NgIf,ImageCarouselComponent],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent {
  @Input() mobile = false;
  @Input() counter = 0;
  orderRedirect() {
    window.open("https://theproofingground.cococart.co?utm_source=organic&utm_medium=website&utm_campaign=nav_order&utm_id=12393813481", "_blank");
  }

}
