import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../models/category';
import {PopUpService} from '../../services/pop_up/pop-up.service';
import {WorksService} from '../../services/work/works-service.service';
import {CategoryService} from '../../services/category/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  public category: Category;
  @Output() create: EventEmitter<Category> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private popUpService: PopUpService, private categoryService: CategoryService) {
    this.category = new Category('', []);
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
