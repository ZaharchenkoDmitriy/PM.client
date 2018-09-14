import { Injectable } from '@angular/core';
import {Category} from '../../models/category';
import {Work} from '../../models/work';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: BehaviorSubject<Category[]> = new BehaviorSubject([]);
  private categoriesArr: Category[];

  constructor() {
    const categories = [];
    categories.push(new Category('Paintings', [new Work('Wall painting', 20 )]));
    categories[0].id = 1;

    this.categories.subscribe((gr) => this.categoriesArr = gr);
    this.categories.next(categories);
  }

  getCategories() {
    return this.categories;
  }

  createWorkForCategory(work: Work, category: Category) {
    category.works.push(work);
    this.categories.next(this.categoriesArr);
  }

  createCategory(category: Category) {
    category.id = this.categoriesArr.length + 1;
    this.categoriesArr.push(category);
    this.categories.next(this.categoriesArr);
  }

  deleteWork(work: Work) {
    const category = this.categoriesArr.find((gr) => gr.works.indexOf(work) !== -1);
    category.works = category.works.filter((wk) => wk !== work );
    this.categories.next(this.categoriesArr);
  }
  deleteCategory(category: Category) {
    this.categoriesArr = this.categoriesArr.filter((cgr) => cgr !== category);
    this.categories.next(this.categoriesArr);
  }

  updateWork(work: Work) {
    this.categories.next(this.categoriesArr);
  }
}
