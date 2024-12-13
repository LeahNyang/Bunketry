import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { AboutusCarouselComponent } from '../aboutus-carousel/aboutus-carousel.component'
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aboutus-card',
  standalone: true,
  imports: [NgClass, NgIf, ImageCarouselComponent, AboutusCarouselComponent],
  templateUrl: './aboutus-card.component.html',
  styleUrl: './aboutus-card.component.css'
})
export class AboutusCardComponent {
  @Input() mobile = false;
  
  SubTitle = "Hearty, healthy, homely";
  url: string = '/data/aboutus.json';
  Snippets: Array<any> = [];
  BannerImage ='/assets/About_816x499.webp'
  
  ngOnInit() {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.Snippets = json;
    });
  }
}
