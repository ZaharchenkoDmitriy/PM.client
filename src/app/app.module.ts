import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './content/projects/project/project.component';
import { ContentComponent } from './content/content.component';
import {WorksService} from './services/work/works-service.service';
import { AddWorkFormComponent } from './content/projects/project/add-work-form/add-work-form.component';
import { CreateWorkFormComponent } from './content/managing/create-work-form/create-work-form.component';
import {FormsModule} from '@angular/forms';
import { WorksComponent } from './managing/works/works.component';
import {CategoryService} from './services/category/category.service';
import { CreateCategoryComponent } from './managing/create-category/create-category.component';
import { PopUpService} from './services/pop_up/pop-up.service';
import { EditCategoryFormComponent } from './managing/edit-category-form/edit-category-form.component';
import { NavBarComponent } from './managing/nav-bar/nav-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectsComponent } from './content/projects/projects.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProjectService} from './services/project/project.service';
import {CrudService} from './services/crud-service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ContentComponent,
    AddWorkFormComponent,
    CreateWorkFormComponent,
    WorksComponent,
    CreateCategoryComponent,
    EditCategoryFormComponent,
    NavBarComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WorksService,
    CategoryService,
    CrudService,
    ProjectService,
    PopUpService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
