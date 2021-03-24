import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles.model';
import { CommoService } from '../commo.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Articles[] = [];

  constructor(private RestService: RestService, private commonService: CommoService) {}

  ngOnInit() {
    this.getAllPosts();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPosts();
    });
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
}
