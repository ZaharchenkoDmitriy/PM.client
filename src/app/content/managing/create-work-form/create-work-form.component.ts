import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Work} from '../../../models/work';
import {WorksService} from '../../../services/work/works-service.service';
import {CategoryService} from '../../../services/category/category.service';
import {PopUpService} from '../../../services/pop_up/pop-up.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-create-work-form',
  templateUrl: './create-work-form.component.html',
  styleUrls: ['./create-work-form.component.css']
})
export class CreateWorkFormComponent implements OnInit {
  public viewWork: Work;

  @Input() work: Work;
  @Input() category: Category;
  @Output() close: EventEmitter<Work> = new EventEmitter();

  constructor(private categoryService: CategoryService, private popUpService: PopUpService) {
    if (this.work) {
      this.viewWork = this.work;
    } else {
      this.viewWork = new Work('', 0);
    }
  }

  ngOnInit() {
    this.popUpService.initPopup();
  }

  createWork() {
    this.categoryService.createWorkForCategory(this.viewWork, this.category);
    this.viewWork = new Work('', 0.00);
    this.close.emit();
  }

  updateWork() {
    this.work = this.viewWork;
    this.categoryService.updateWork(this.work);
    this.close.emit();
  }
}
