import { Injectable } from '@angular/core';
import {Category} from '../../models/category';
import {Work} from '../../models/work';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: BehaviorSubject<Category[]> = new BehaviorSubject([]);
  private categoriesArr: Category[];
  private url = environment.host + '/work_categories';

  constructor(private httpClient: HttpClient) {
    const categories = this.httpClient.get(this.url);

    this.categories.subscribe((gr) => this.categoriesArr = gr);
    categories.subscribe((ctgrs: Category[]) => {
      this.categories.next(ctgrs);
    });
  }

  getCategories() {
    return this.categories;
  }

  createWorkForCategory(work: Work, category: Category) {
    this.httpClient.post(this.url + `/${category.id}/` + '/works', work).subscribe((response: any) => {
      category.works.push(work);
      this.categories.next(this.categoriesArr);
    });
  }

  createCategory(category: Category) {
    this.httpClient.post(this.url, category).subscribe((response: any) => {
      category.id = response.id;
      this.categoriesArr.push(category);
      this.categories.next(this.categoriesArr);
    });
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

