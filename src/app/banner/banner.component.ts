import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer,interval, take } from 'rxjs';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  private timer = timer(0,5000);
  
  background_images=[
    '/assets/Landing_01_1920x1011.webp',
    '/assets/Landing_02_1920x1011.webp',
    '/assets/Landing_03_1920x1011.webp',
    '/assets/Landing_04_1920x1011.webp'
  ];
  background_image = '/assets/Landing_01_1920x1011.webp';
  index = 0;
  
  public change_background(){
    this.index+=1;
    if(this.index>3){
      this.index=0;
    }
    this.background_image = this.background_images[this.index];

  }
  numbers = this.timer.subscribe(n => this.change_background());
  orderRedirect() {
    window.open("https://theproofingground.cococart.co?utm_source=organic&utm_medium=website&utm_campaign=nav_order&utm_id=12393813481", "_blank");
  }



  
}
