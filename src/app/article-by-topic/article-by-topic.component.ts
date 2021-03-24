import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from '../articles.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-article-by-topic',
  templateUrl: './article-by-topic.component.html',
  styleUrls: ['./article-by-topic.component.css']
})
export class ArticleByTopicComponent implements OnInit {
  articles: Article[] = [];
  topic: string = '';
  article: any;

  constructor(private RestService: RestService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params.topic);
          this.topic = params.topic;
          this.RestService.getArtticles().subscribe(data => {
            console.log(data);
            this.article = data.find(el => el.topic === this.topic);
            for (const article of data) {
                this.articles = data.filter(el => el.topic === this.topic);
                console.log(this.articles);
            }
          })
        }
      )
   }
  } 