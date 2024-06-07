import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer,interval, take } from 'rxjs';
import { trigger, transition, style, animate } from "@angular/animations";

export interface ICarouselImage {
  url: string;
  caption?: string; // the `?` indicates optional data that won't return an error if missing
  alt?: string;
}



@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css',
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [ style({ opacity: 0 }),animate('300ms', style({ opacity: 1 })) ]),
      transition('* => void', [ animate('300ms', style({ opacity: 0 } )) ])
    ])
  ]
})

export class ImageCarouselComponent{
  @Input() mobile = false;
  @Input() counter = 0;
  activeImageIndex = 0;
  public slides=[
    { url:'/assets/Menu_01_502x631.webp'},
    { url:'/assets/Menu_02_502x631.webp'},
    { url:'/assets/Menu_03_502x631.webp'},
    { url:'/assets/Menu_04_502x631.webp'}
  ];
  constructor() { }
  currentSlide = 0;
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    // console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    // console.log("next clicked, new current slide is: ", this.currentSlide);
  }
  numbers = timer(0, 5000).subscribe(n => this.onNextClick());
}
