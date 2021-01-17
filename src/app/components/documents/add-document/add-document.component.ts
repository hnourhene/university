import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doc } from 'src/app/models/doc';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  fileToUpload: File = null;
  document;
  constructor(
    private db: DbService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addDocument(documentForm: NgForm){
    this.document=new Doc(
      documentForm.value.type,
      this.fileToUpload,
      documentForm.value.name,
    );
    this.db.addDocument(this.document);
    this.router.navigate(['document']);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

}
