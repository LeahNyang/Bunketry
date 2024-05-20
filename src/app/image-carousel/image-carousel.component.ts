import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ICarouselImage {
  url: string;
  caption?: string; // the `?` indicates optional data that won't return an error if missing
  alt?: string;
}


@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [Component,CommonModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})

export class ImageCarouselComponent{

  activeImageIndex = 0;
  slides=[
    { url:'/assets/Landing_01_1920x1011.png'},
    { url:'/assets/Landing_02_1920x1011.png'},
    { url:'/assets/Landing_03_1920x1011.png'},
    { url:'/assets/Landing_04_1920x1011.png'}
  ];
  constructor() { }
  ngOnInit(): void {}
}
