import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule,NgIf,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private responsive: BreakpointObserver) {

  }
  hideSideMenu = false;
  ngOnInit() {

    this.responsive.observe([
      Breakpoints.Medium,Breakpoints.Small,Breakpoints.XSmall])
      .subscribe(result => {
        if (result.matches) {
          this.hideSideMenu = true;
          console.log(result);
        } else {
          this.hideSideMenu = false;
        }

      });

  }

}
