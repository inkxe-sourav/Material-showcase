import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent  {

    @ViewChild('side') side: MatSidenav;

    reason = '';
  
    close(reason: string) {
      this.reason = reason;
      this.side.close();
    }
  
    shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
