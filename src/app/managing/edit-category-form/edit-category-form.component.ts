import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../models/category';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.css']
})
export class EditCategoryFormComponent implements OnInit {
  @Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

  saveCategory() {
  }
}
