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
    '/assets/Landing_01_1920x1011.png',
    '/assets/Landing_02_1920x1011.png',
    '/assets/Landing_03_1920x1011.png',
    '/assets/Landing_04_1920x1011.png'
  ];
  background_image = '/assets/Landing_01_1920x1011.png';
  index = 0;
  
  public change_background(){
    this.index+=1;
    if(this.index>3){
      this.index=0;
    }
    this.background_image = this.background_images[this.index];

  }
  numbers = this.timer.subscribe(n => this.change_background());



  
}
