import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
backgroundcolor = environment.backgroundcolor;
  constructor() { 
    console.log(this.backgroundcolor);
  }

  ngOnInit() {
  }

}
