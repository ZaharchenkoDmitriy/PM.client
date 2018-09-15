import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Project} from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public projects: BehaviorSubject<Project[]> = new BehaviorSubject([]);
  private projectsArr: Project[];

  constructor() {
    this.projects.subscribe((pr) => this.projectsArr = pr);
}
}
