import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Project} from '../../models/project';
import {CrudService, crudObjects, crudUrl} from '../crud-service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends CrudService {
  public selectedProject = new BehaviorSubject<Project>(null);
  // localStorage.setItem('dataSource', this.dataSource.length);

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.projects.subscribe(_ => this.selectProject(null));
  }
  @crudObjects
  public projects: BehaviorSubject<Project[]> = new BehaviorSubject([]);

  @crudUrl
  public crudUrl = 'projects';

  selectProject(project: Project) {
    if (!project) {
      const projectId =  +localStorage.getItem('selectedProjectId');
      if (projectId) {
        this.getById(projectId).subscribe((p: Project) => this.selectedProject.next(p));
      }
    } else {
      localStorage.setItem('selectedProjectId', `${project.id}`);
      this.selectedProject.next(project);
    }
  }
}
