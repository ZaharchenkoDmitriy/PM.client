import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Work} from '../../../models/work';
import {WorksService} from '../../../services/work/works-service.service';
import {GroupService} from '../../../services/group/group.service';
import {PopUpService} from '../../../services/pop_up/pop-up.service';
import {Group} from '../../../models/group';

@Component({
  selector: 'app-create-work-form',
  templateUrl: './create-work-form.component.html',
  styleUrls: ['./create-work-form.component.css']
})
export class CreateWorkFormComponent implements OnInit {
  public work: Work;

  @Input() group: Group;
  @Output() close: EventEmitter<Work> = new EventEmitter();

  constructor(private groupService: GroupService, private popUpService: PopUpService) {
    this.work = new Work('', 0);
  }

  ngOnInit() {
    this.popUpService.initPopup();
  }

  createWork() {
    this.groupService.createWorkForGroup(this.work, this.group);
    this.work = new Work('', 0.00);
    this.close.emit();
  }
}
