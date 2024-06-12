import { Component, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  @ViewChild('myIframe')
  iframe!: ElementRef;
  url = `https://theproofingground.cococart.co`;

  iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url); // Set your iframe URL here


  constructor(private sanitizer: DomSanitizer){
    
  }
  iframeLoaded() {

    // console.log('Iframe loaded');
  }
  ngAfterViewInit() {
    // Wait for the iframe to be loaded
    console.log(this.iframe)
    this.iframe.nativeElement.contentWindow.addEventListener('message', (event: any) => {
      // Handle the event here
      console.log('Event received from iframe:', event);
    });
  }

}
