import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students;
  constructor(
    private db: DbService,
  ) { }

  ngOnInit(): void {
    this.students=this.db.getStudents();
  }

}
