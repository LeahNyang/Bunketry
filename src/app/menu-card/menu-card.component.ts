import { Component,Input } from '@angular/core';
import  { ImageCarouselComponent} from '../image-carousel/image-carousel.component'
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [NgClass,NgFor, NgIf,ImageCarouselComponent,RouterModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent {
  @Input() mobile = false;
  @Input() counter = 0;
  orderRedirect() {
    window.open("https://theproofingground.cococart.co?utm_source=organic&utm_medium=website&utm_campaign=nav_order&utm_id=12393813481", "_blank",'noopener');
  }
  url: string = '/data/menu.json';
  Items: Array<any> = [];
  ngOnInit() {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.Items = json;
    });
  }
  get getSourdoughs() {
    return this.Items.filter( x => x.type == "Sourdough")
  }
  get getMilkbreads() {
    return this.Items.filter( x => x.type == "Milk bread")
  }
  get getTeaCakes() {
    return this.Items.filter( x => x.type == "Tea Cakes")
  }
  get getKefirs() {
    return this.Items.filter( x => x.type == "Kefir")
  }
  get getKombuchas() {
    return this.Items.filter( x => x.type == "Kombucha")
  }
  get getButters() {
    return this.Items.filter( x => x.type == "Butter")
  }
  get getDips() {
    return this.Items.filter( x => x.type == "Dips")
  }
  get getSeasonal() {
    return this.Items.filter( x => x.type == "Seasonal")
  }
}
