import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Articles } from '../articles.model';
import { CommoService } from '../commo.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  topics = ['Java', 'Javascript', 'Python', 'Design', 'Devops', 'Other'];
  newArticleForm!: FormGroup;
  constructor(private restService: RestService, private commonService: CommoService) { }

  ngOnInit() {
    this.newArticleForm = new FormGroup({
    'topic': new FormControl(null, Validators.required),
    'image': new FormControl(null, Validators.required),
    'title': new FormControl(null, Validators.required),
    'desc': new FormControl(null, Validators.required),
    'text': new FormControl(null, Validators.required),
    })
  }

  onSubmit(postData: Articles) {
    this.restService.postArticle(postData)
    .subscribe(
      data => {
        this.commonService.notifyPostAddition();
      }
    )
  }
  
}
