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

  private sanitizer = inject(DomSanitizer);

  trustedUrl : any = '';

  constructor(){
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl('https://theproofingground.cococart.co');
  }

  updateIframeSrc(newUrl :string){
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(newUrl);
  }
}
