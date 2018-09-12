import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../../models/group';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.css']
})
export class EditCategoryFormComponent implements OnInit {
  @Input() category: Group;

  constructor() { }

  ngOnInit() {
  }

  saveCategory() {
    console.log(this.category);
  }
}
