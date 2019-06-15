import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project/project.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public menuClass = 'closed';

  constructor(public projectService: ProjectService) {

  }

  ngOnInit() {
  }
  toggleMenu(): void {
    this.menuClass = this.menuClass === 'opened' ? 'closed' : 'opened';
  }
}
