import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];

  constructor(private projectService: ProjectService) {
    projectService.projects.subscribe((prs) => this.projects = prs);
  }

  ngOnInit() {}

}
