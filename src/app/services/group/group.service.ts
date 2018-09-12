import { Injectable } from '@angular/core';
import {Group} from '../../models/group';
import {Work} from '../../models/work';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups: BehaviorSubject<Group[]> = new BehaviorSubject([]);
  private groupsArr: Group[];

  constructor() {
    const groups = [];
    groups.push(new Group('Paintings', [new Work('Wall painting', 20 )]));
    groups[0].id = 1;

    this.groups.subscribe((gr) => this.groupsArr = gr);
    this.groups.next(groups);
  }

  getGroups() {
    return this.groups;
  }

  createWorkForGroup(work: Work, group: Group) {
    group.works.push(work);
    this.groups.next(this.groupsArr);
  }

  createCategory(category: Group) {
    category.id = this.groupsArr.length + 1;
    this.groupsArr.push(category);
    this.groups.next(this.groupsArr);
  }
}
