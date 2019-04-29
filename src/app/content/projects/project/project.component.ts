import {Component, Input, OnInit} from '@angular/core';
import {WorksService} from '../../../services/work/works-service.service';
import {Work} from '../../../models/work';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() projectId: number;

  public works: BehaviorSubject<Work[]>;

  constructor(private worksService: WorksService) {}

  ngOnInit() {
    this.worksService.setProjectId(this.projectId);
    this.worksService.getAll();
    // TODO: Change to this realisation
    this.works = this.worksService.objects;
  }

  openAddWorkForm() {

  }
}
