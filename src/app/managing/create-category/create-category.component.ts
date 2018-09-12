import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Group} from '../../models/group';
import {PopUpService} from '../../services/pop_up/pop-up.service';
import {WorksService} from '../../services/work/works-service.service';
import {GroupService} from '../../services/group/group.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  public category: Group;
  @Output() create: EventEmitter<Group> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private popUpService: PopUpService, private categoryService: GroupService) {
    this.category = new Group('', []);
  }

  ngOnInit() {
    this.popUpService.initPopup();
  }

  createCategory() {
    this.categoryService.createCategory(this.category);
    this.create.emit();
  }
  emitClose() {
    this.close.emit();
  }
}
