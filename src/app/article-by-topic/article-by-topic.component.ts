import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Articles } from '../articles.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-article-by-topic',
  templateUrl: './article-by-topic.component.html',
  styleUrls: ['./article-by-topic.component.css']
})
export class ArticleByTopicComponent implements OnInit {
  articles: Articles[] = [];
  articlesAvailable: boolean = true;

  constructor(private RestService: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let topic = this.route.snapshot.params['topic']
    this.RestService.getArtticles()
    .subscribe(
      data => {
        for(let article of data) {
          if (article.topic === topic) {
            this.articles.push(article);
            if (this.articles.length === 0) {
              this.articlesAvailable = false;
            }
          }
        }
      }, error => {
        console.log(error);
      }
      )
      
      /* this.route.params
      .subscribe(
        (params: Params) => {
          this.articles = [];
          topic = params['topic']
          this.RestService.getArtticles()
    .subscribe(
      data => {
        for(let article of data) {
          if (article.topic === topic) {
            this.articles.push(article);
          }
        }
      }, error => {
        console.log(error);
      }
      )
        }
      ) */
    } 

  }


  
