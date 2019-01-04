import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {Category} from '../../models/category';
import {PopUpService} from '../../services/pop_up/pop-up.service';
import {State} from '../../models/state';
import {Work} from '../../models/work';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  public categories: Category[];
  public categoryEdition = false;
  public selectedCategory: Category;
  public categoryCreation = false;
  public test: any = {message: 'not READY'};

  constructor(private categoryService: CategoryService,
              public popUpService: PopUpService) {
    categoryService.getCategories().subscribe((categories) => this.categories = categories);
  }

  ngOnInit() {
  }

  openCategoryEditForm(category: Category) {
    this.selectedCategory = category;
    this.categoryEdition = true;
    event.stopPropagation();
    this.popUpService.initStates([
      new State(0, 'category'),
      new State(1, 'create-work'),
      new State(2, 'edit-work')]);

  }

  openCreateCategoryForm() {
    this.categoryCreation = true;
  }

  deleteWork(work: Work) {
    if (this.popUpService.confirm('Are you sure?')){
      this.categoryService.deleteWork(work);
    }
  }
  deleteCategory(category: Category) {
    if (this.popUpService.confirm('Are you sure?')) {
      this.categoryService.deleteCategory(category);
    }
    event.stopPropagation();
  }
}
