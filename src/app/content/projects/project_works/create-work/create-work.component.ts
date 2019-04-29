import { Component, OnInit } from '@angular/core';
import {Work} from '../../../../models/work';
import {CategoryService} from '../../../../services/category/category.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Category} from '../../../../models/category';

@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.css']
})
export class CreateWorkComponent implements OnInit {
  public viewProjectWork: Work;
  public projectWork = null;
  public categories: BehaviorSubject<Category[]>;
  public selectedCategory = null;
  public selectedWork = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  changeCategory(category) {
    this.selectedCategory = category;
    this.selectedWork = null;
  }
  selectWork(work) {
    this.selectedWork = work;
  }

  updateProjectWork() {
    return false;
  }

  createProjectWork() {
    return false;
  }
}
