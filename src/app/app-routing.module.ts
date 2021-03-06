import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {WorksComponent} from './managing/works/works.component';
import {ProjectsComponent} from './content/projects/projects.component';
import {ProjectComponent} from './content/projects/project/project.component';

const routes = [
  {path: 'managing', component: WorksComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
