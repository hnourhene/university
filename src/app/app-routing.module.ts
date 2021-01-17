import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDocumentComponent } from './components/documents/add-document/add-document.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/students/add/add.component';
import { ModifyComponent } from './components/students/modify/modify.component';
import { StudentsComponent } from './components/students/students.component';
import { AddTeacherComponent } from './components/teachers/add-teacher/add-teacher.component';
import { ModifyTeacherComponent } from './components/teachers/modify-teacher/modify-teacher.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentsComponent},
  {path:'student/add',component:AddComponent},
  {path:'student/:id',component:ModifyComponent},
  {path:'teacher',component:TeachersComponent},
  {path:'teacher/add',component:AddTeacherComponent},
  {path:'teacher/:id',component:ModifyTeacherComponent},
  {path:'document',component:DocumentsComponent},
  {path:'document/add',component:AddDocumentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
