import { Injectable } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TpgServiceService {
  public mobile = false;
  mobileVisibilityChange: Subject<boolean> = new Subject<boolean>();
  constructor(private responsive: BreakpointObserver) { 
    this.mobileVisibilityChange.subscribe((value) => {
      this.mobile = value
  }); 
  }
  
  ngOnInit() {

    this.responsive.observe([
      Breakpoints.Medium,Breakpoints.Small,Breakpoints.XSmall])
      .subscribe(result => {
        if (result.matches) {
          this.mobileVisibilityChange.next(true) 
          console.log(this.mobile);
        } else {
          this.mobileVisibilityChange.next(false) 
          console.log(this.mobile);
        }

      });

  }
}
