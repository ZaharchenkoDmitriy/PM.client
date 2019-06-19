import {Component, Input, OnInit} from '@angular/core';
import {WorksService} from '../../../services/work/works-service.service';
import {Work} from '../../../models/work';
import {BehaviorSubject} from 'rxjs';
import {ProjectService} from '../../../services/project/project.service';
import {Project} from '../../../models/project';
import {PopUpService} from '../../../services/pop_up/pop-up.service';
import {State} from '../../../models/state';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() projectId: number;

  public works: BehaviorSubject<Work[]>;
  public project: Project;
  public popUpOpened = false;

  constructor(public worksService: WorksService,
              public projectsService: ProjectService,
              public popUpService: PopUpService) {
  }


  ngOnInit() {
    this.projectsService.selectedProject.subscribe(p => {
      this.project = p;
      if (this.project) {
        this.worksService.setProjectId(this.project.id);
        this.worksService.getAll();
        this.works = this.worksService.objects;
      }
    });

    this.popUpService.initStates([new State(0, 'work')]);
  }

  removeWork(work: Work) {
    this.worksService.delete(work);
    this.project.worksCount -= 1;
    this.project.projectCost -= work.cost;
  }

  openAddWorkForm() {
    this.popUpOpened = true;
  }
}
