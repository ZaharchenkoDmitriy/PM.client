import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project/project.service';
import {PopUpService} from '../../services/pop_up/pop-up.service';
import {State} from '../../models/state';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public projectCreation = false;
  constructor(private projectService: ProjectService, public popUpService: PopUpService) {
    this.popUpService.initStates([new State(0, 'project')]);
  }

  ngOnInit() {
    this.projectService.getAll();
    this.projectService.objects.subscribe(projects => this.projects = projects);
  }

  openProjectCreationForm() {
    this.projectCreation = true;
  }
}
