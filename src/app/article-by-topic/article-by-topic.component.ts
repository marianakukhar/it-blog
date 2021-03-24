import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from '../articles.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-article-by-topic',
  templateUrl: './article-by-topic.component.html',
  styleUrls: ['./article-by-topic.component.css']
})
export class ArticleByTopicComponent implements OnInit, OnChanges {
  articles: Article[] = [];
  topic: string = '';

  constructor(private RestService: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /* let topic = this.route.snapshot.params['topic']; */
    this.route.params
        .subscribe(
      (params: Params) => {
        console.log(params['topic']);
         this.topic = params['topic'];
      }
    )

    this.RestService.getArtticles()
    .subscribe(
      data => {
        for(let article of data) {
          if (article.topic === this.topic) {
            this.articles.push(article);
          }
        }
      }, error => {
        console.log(error);
        }
      )
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      
    }

    getTopic() {
      
    }

  }


  
