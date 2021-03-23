import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  topics = ['Java', 'Javascript', 'Python', 'UI/UX Design', 'Machine Learning', 'Devops', 'Other'];
  newArticleForm!: FormGroup;
  constructor() { }

  ngOnInit() {
    this.newArticleForm = new FormGroup({
    'topic' : new FormControl(null),
    'title' : new FormControl(null, Validators.required),
    'desc' : new FormControl(null, Validators.required),
    'full-text' : new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    console.log(this.newArticleForm)
  }
  

}
