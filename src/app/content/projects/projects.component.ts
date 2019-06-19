import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project/project.service';
import {PopUpService} from '../../services/pop_up/pop-up.service';
import {State} from '../../models/state';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: BehaviorSubject<Project[]>;
  public projectCreation = false;
  constructor(private projectService: ProjectService, public popUpService: PopUpService, private router: Router) {
    this.popUpService.initStates([new State(0, 'project')]);
  }

  ngOnInit() {
    this.projects = this.projectService.getAll();
    this.projectService.getByFilters({items_count: ' > 0'});
  }

  openProjectCreationForm() {
    this.projectCreation = true;
  }

  selectProject(project: Project) {
    this.projectService.selectProject(project);
    this.router.navigate([`projects/${project.id}`]);
  }
}
