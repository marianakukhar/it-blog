import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from '../articles.model';
import { CommoService } from '../commo.service';
import { DialogComponent } from '../dialog/dialog.component';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(private RestService: RestService, private commonService: CommoService, private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAllPosts();
    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPosts();
    });

    this.route.params
    .subscribe(
      (params: Params) => {
        console.log(params)
      }
    )
  }

  getAllPosts() {
    this.RestService.getArtticles()
    .subscribe(
      data => {
        this.articles = data;
      }, error => {
        console.log(error);
      }
    )
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}