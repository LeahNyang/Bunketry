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
    { url:'/assets/Prof_Jean.png',caption:"and optimised for speed, often at the expense of the joy and the mindfulness in the process. You can't rush bread, however - if it needs to proof, it needs to prood. There's a profound appreciation of time and purpose the I've discovered through baking, that I wish to share with you all"},
    { url:'/assets/Prof_Leah.png',caption:"Baking forces me to slow down. Everything these days is designed and optimised for speed, often at the expense of the joy and the mindfulness in the process. You can't rush bread, however - if it needs to proof, it needs to prood. There's a profound appreciation of time and purpose the I've discovered through baking, that I wish to share with you all"}
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
