import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ModifyComponent } from './components/students/modify/modify.component';
import { AddComponent } from './components/students/add/add.component';
import { ModifyTeacherComponent } from './components/teachers/modify-teacher/modify-teacher.component';
import { AddTeacherComponent } from './components/teachers/add-teacher/add-teacher.component';
import { NavbarComponent } from './fragments/navbar/navbar.component';
import { SidebarComponent } from './fragments/sidebar/sidebar.component';
import { FooterComponent } from './fragments/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AddDocumentComponent } from './components/documents/add-document/add-document.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    TeachersComponent,
    DocumentsComponent,
    ModifyComponent,
    AddComponent,
    ModifyTeacherComponent,
    AddTeacherComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AddDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
