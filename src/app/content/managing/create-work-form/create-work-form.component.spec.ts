import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkFormComponent } from './create-work-form.component';

describe('CreateWorkFormComponent', () => {
  let component: CreateWorkFormComponent;
  let fixture: ComponentFixture<CreateWorkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
