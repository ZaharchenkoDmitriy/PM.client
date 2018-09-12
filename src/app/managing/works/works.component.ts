import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Group} from '../../models/group';
import {GroupService} from '../../services/group/group.service';
import {Work} from '../../models/work';
import {CreateWorkFormComponent} from '../../content/managing/create-work-form/create-work-form.component';
import {PopUpService} from '../../services/pop_up/pop-up.service';
import {State} from '../../models/state';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit{
  public groups: Group[];
  public groupEdition = false;
  public selectedGroup: Group;
  public categoryCreation = false;

  constructor(private groupsService: GroupService,
              public popUpService: PopUpService,
              private sanitizer: DomSanitizer) {
    groupsService.getGroups().subscribe((groups) => this.groups = groups);
  }

  ngOnInit() {
  }

  openCategoryEditForm(group: Group) {
    this.selectedGroup = group;
    this.groupEdition = true;
    event.stopPropagation();
    this.popUpService.initStates([
      new State(0, 'category'),
      new State(1, 'create-work')]);

  }

  openCreateCategoryForm() {
    this.categoryCreation = true;
  }
}
