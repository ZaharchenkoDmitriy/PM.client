import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkFormComponent } from './add-work-form.component';

describe('AddWorkFormComponent', () => {
  let component: AddWorkFormComponent;
  let fixture: ComponentFixture<AddWorkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
