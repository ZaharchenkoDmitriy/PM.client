import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './content/project/project.component';
import { ContentComponent } from './content/content.component';
import {WorksService} from './services/work/works-service.service';
import { AddWorkFormComponent } from './content/project/add-work-form/add-work-form.component';
import { CreateWorkFormComponent } from './content/managing/create-work-form/create-work-form.component';
import {FormsModule} from '@angular/forms';
import { WorksComponent } from './managing/works/works.component';
import {GroupService} from './services/group/group.service';
import { CreateCategoryComponent } from './managing/create-category/create-category.component';
import {PopUpService} from './services/pop_up/pop-up.service';
import { EditCategoryFormComponent } from './managing/edit-category-form/edit-category-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ContentComponent,
    AddWorkFormComponent,
    CreateWorkFormComponent,
    WorksComponent,
    CreateCategoryComponent,
    EditCategoryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    WorksService,
    GroupService,
    PopUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
