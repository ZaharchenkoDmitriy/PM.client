import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Project} from '../../models/project';
import {CrudService, crudObjects, crudUrl} from '../crud-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends CrudService {
  @crudObjects
  public projects: BehaviorSubject<Project[]> = new BehaviorSubject([]);

  @crudUrl
  public crudUrl = 'projects';
}
