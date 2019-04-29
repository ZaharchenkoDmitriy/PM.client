import { Injectable } from '@angular/core';
import {Work} from '../../models/work';
import {crudObjects, CrudService, crudUrl} from '../crud-service';
import {BehaviorSubject} from 'rxjs';
import {Project} from '../../models/project';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorksService extends CrudService {
  @crudObjects
  public projects: BehaviorSubject<Project[]> = new BehaviorSubject([]);

  @crudUrl
  public crudUrl = ``;

  setProjectId(projectId: number): void {
    this.crudUrl = `projects/${projectId}/project_works`;
  }
}

