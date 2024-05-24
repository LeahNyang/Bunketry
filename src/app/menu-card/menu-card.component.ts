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

}
