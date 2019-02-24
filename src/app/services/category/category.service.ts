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
    this.httpClient.post(this.url + `/${category.id}/` + '/works', work).subscribe((response: Work) => {
      category.works.push(response);
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
    this.httpClient.delete(`${this.url}/${category.id}/works/${work.id}`).subscribe((response: any ) => {
      category.works = category.works.filter((wk) => wk !== work);
      this.categoriesArr = this.categoriesArr.filter(c => c.id !== category.id);
      this.categoriesArr.push(category);
      this.categories.next(this.categoriesArr);
    });
  }
  deleteCategory(category: Category) {
    this.httpClient.delete(`${this.url}/${category.id}`).subscribe(_ => {
      this.categoriesArr = this.categoriesArr.filter((cgr) => cgr !== category);
      this.categories.next(this.categoriesArr);
    });
  }

  updateWork(work: Work) {
    this.httpClient.put(`${this.url}/${work.work_category_id}/works/${work.id}`, work).subscribe((response: Work) => {
      work = response;
      this.categories.next(this.categoriesArr);
    });
  }
}

