import { Injectable } from '@angular/core';
import { Doc } from '../models/doc';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  students=[];
  teachers=[];
  documents=[];
  constructor() { }

  getStudents(){
    return this.students;
  }
  getDoocuments(){
    return this.documents;
  }

  // addStudent(cin,fn,ln,bd,p,d){
  //   this.students.push(new Student(cin,fn,ln,bd,p,d));
  // }

  addStudent(student: Student){
    console.log(student);
    this.students.push(student);
  }
  addDocument(doc: Doc){
    console.log(doc);
    this.documents.push(doc);
  }
}
