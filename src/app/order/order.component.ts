import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {


  public trustedUrl: any = '';


  constructor(private sanitizer: DomSanitizer){
    
  }
  ngOnInit() {

    let url = `https://theproofingground.cococart.co`;

     this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
