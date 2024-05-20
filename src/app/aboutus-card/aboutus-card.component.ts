import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-aboutus-card',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './aboutus-card.component.html',
  styleUrl: './aboutus-card.component.css'
})
export class AboutusCardComponent {
  constructor(private responsive: BreakpointObserver) {

  }
  mobile = false;
  ngOnInit() {

    this.responsive.observe([
      Breakpoints.Medium,Breakpoints.Small,Breakpoints.XSmall])
      .subscribe(result => {
        if (result.matches) {
          this.mobile = true;
          console.log(result);
        } else {
          this.mobile = false;
        }

      });

  }
}
