import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student;
  constructor(
    private db: DbService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addStudent(studentForm: NgForm){
    console.log(studentForm.value.bd);
    this.student=new Student(
      studentForm.value.cin,
      studentForm.value.fn,
      studentForm.value.ln,
      studentForm.value.bd,
      studentForm.value.ph,
      studentForm.value.bac
    );
    this.db.addStudent(studentForm.value);
    this.router.navigate(['student']);
  }
}
