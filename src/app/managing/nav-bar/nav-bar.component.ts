import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public menuClass = 'closed';

  constructor() {}

  ngOnInit() {
  }
  toggleMenu(): void {
    this.menuClass = this.menuClass === 'opened' ? 'closed' : 'opened';
  }
}
