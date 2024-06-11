import { Component,Input } from '@angular/core';
import  { ImageCarouselComponent} from '../image-carousel/image-carousel.component'
import { NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [NgClass, NgIf,ImageCarouselComponent,RouterModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent {
  @Input() mobile = false;
  @Input() counter = 0;

}
