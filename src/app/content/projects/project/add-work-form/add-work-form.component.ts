import { Component, OnInit } from '@angular/core';
import {Work} from '../../../../models/work';

@Component({
  selector: 'app-add-work-form',
  templateUrl: './add-work-form.component.html',
  styleUrls: ['./add-work-form.component.css']
})
export class AddWorkFormComponent implements OnInit {
  public work: Work;

  constructor() { }

  ngOnInit() {
  }

}
