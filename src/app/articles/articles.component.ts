import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from '../articles.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Articles[] = [];
  constructor(private RestService: RestService,
    private router: Router) {}

  ngOnInit() {
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
