import {Component, Input, OnInit} from '@angular/core';
import {WorksService} from '../../../services/work/works-service.service';
import {Work} from '../../../models/work';
import {BehaviorSubject} from 'rxjs';
import {ProjectService} from '../../../services/project/project.service';
import {Project} from '../../../models/project';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() projectId: number;

  public works: BehaviorSubject<Work[]>;
  public project: Project;

  constructor(private worksService: WorksService, private projectsService: ProjectService) {
    this.projectsService.selectedProject.subscribe(p => this.project = p);
  }


  ngOnInit() {
    this.worksService.setProjectId(this.project.id);
    this.worksService.getAll();
    this.works = this.worksService.objects;
  }

  openAddWorkForm() {
  }
}
