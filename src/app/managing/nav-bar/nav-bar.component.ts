import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project/project.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public menuClass = 'closed';
  public selectedProject;

  constructor(private projectService: ProjectService) {
    this.selectedProject = projectService.selectedProject;
  }

  ngOnInit() {
  }
  toggleMenu(): void {
    this.menuClass = this.menuClass === 'opened' ? 'closed' : 'opened';
  }
}
