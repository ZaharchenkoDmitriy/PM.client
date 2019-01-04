import {Component, Input, OnInit} from '@angular/core';
import {WorksService} from '../../../services/work/works-service.service';
import {Work} from '../../../models/work';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() projectId: number;

  public works: Work[];

  constructor(private worksService: WorksService) {}

  ngOnInit() {
    this.worksService.setProjectId(this.projectId);
    this.worksService.getAll();
    this.worksService.objects.subscribe(works => this.works = works);
  }

  openAddWorkForm() {

  }
}
