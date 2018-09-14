import { Injectable } from '@angular/core';
import {Work} from '../../models/work';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private works: Work[] = [];

  constructor() {
    const work = new Work('title', 20);
    work.title = 'title';
    this.works.push(work);
  }

  getWorksForProject() {
    return this.works;
  }

  createWork(work: Work) {
    this.works.push(work);
  }
}
