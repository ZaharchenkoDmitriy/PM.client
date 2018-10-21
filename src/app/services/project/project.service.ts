import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Project} from '../../models/project';
import {CrudService} from '../crud-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends CrudService {
  public projects: BehaviorSubject<Project[]>;

  postConstruct() {
    this.projects = new BehaviorSubject([]);
    this.initCrud('projects', this.projects);
  }
}
