import { Component,Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import  { ImageCarouselComponent} from '../image-carousel/image-carousel.component'

@Component({
  selector: 'app-aboutus-card',
  standalone: true,
  imports: [NgClass, NgIf,ImageCarouselComponent],
  templateUrl: './aboutus-card.component.html',
  styleUrl: './aboutus-card.component.css'
})
export class AboutusCardComponent {
  @Input() mobile = false;
}
