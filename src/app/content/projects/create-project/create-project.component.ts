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
    // @ts-ignore
    setTimeout( _ => {$('.input-daterange').datepicker()}, 100);
  }

  createProject(event) {
    event.preventDefault();
    // @ts-ignore
    this.project.date_start = $('#date-start').attr('value');
    // @ts-ignore
    this.project.date_end = $('#date-end').attr('value');

    this.projectService.create(this.project);
  }
}
