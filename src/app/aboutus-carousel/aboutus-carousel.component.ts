import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-aboutus-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus-carousel.component.html',
  styleUrl: './aboutus-carousel.component.css'
})
export class AboutusCarouselComponent {
  @Input() mobile = false;
  activeIndex = 0;
  public slides=[
    { url:'/assets/Prof_Jean.png',caption:"Baking forces me to slow down. Everything these days is designed and optimised for speed, often at the expense of the joy and the mindfulness in the process. You can't rush bread, however - if it needs to proof, it needs to proof. There's a profound appreciation of time and purpose the I've discovered through baking, that I wish to share with you all"},
    { url:'/assets/Prof_Leah.png',caption:"I started off baking shokupan (Japanese milk bread) for myself because I really liked how fluffy the bread was, but I received an overwhelming response from my friends and family. I decided to share this goodness with everybody. I have a passion for making delicious food, and I am always trying out new recipes to bring more yummy creations to life."}
  ];

  currentSlide = 0;
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
