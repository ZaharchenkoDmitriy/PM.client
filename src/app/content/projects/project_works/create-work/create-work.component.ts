import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Work} from '../../../../models/work';
import {CategoryService} from '../../../../services/category/category.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Category} from '../../../../models/category';
import {WorksService} from '../../../../services/work/works-service.service';

@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.css']
})
export class CreateWorkComponent implements OnInit {
  @Input() worksService: WorksService;
  @Output() close = new EventEmitter();

  public viewProjectWork: Work;
  public projectWork = null;
  public categories: BehaviorSubject<Category[]>;
  public selectedCategory = null;
  public selectedWork = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    // @ts-ignore
    $('#categoriesSelect').dropdown();
  }

  changeCategory(category) {
    this.selectedCategory = category;
    this.selectedWork = null;
    // @ts-ignore
    $('#categoriesSelect').dropdown('toggle');
    // @ts-ignore
    setTimeout( _ => $('#worksSelect').dropdown(), 1);
  }
  selectWork(work) {
    this.selectedWork = work;
    // @ts-ignore
    $('#worksSelect').dropdown('toggle');
  }

  updateProjectWork() {
    return false;
  }

  createProjectWork() {
    this.selectedWork.work_category_id = this.selectedCategory.id;
    this.worksService.create(this.selectedWork, true);
    this.close.emit();
  }
}
