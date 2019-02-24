import { Component, OnInit } from '@angular/core';
import {Project} from '../../../models/project';
import {ProjectService} from '../../../services/project/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  public project = new Project('', '', 0);
  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
  }

  createProject(event) {
    event.preventDefault();
    console.log(this.projectService.create(this.project));
  }
}
