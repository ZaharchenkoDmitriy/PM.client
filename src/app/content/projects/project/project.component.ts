import { Component, OnInit } from '@angular/core';
import {WorksService} from '../../../services/work/works-service.service';
import {Work} from '../../../models/work';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public works: Work[];

  constructor(private worksService: WorksService) {
    this.works = this.worksService.getWorksForProject();
  }

  ngOnInit() {
  }

  openAddWorkForm() {

  }
}
