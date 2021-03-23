import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: any;
  constructor(private route: ActivatedRoute, private RestService: RestService) { }

  ngOnInit(): void {
    this.article = {
      id: this.route.snapshot.params['id']
    }

    this.RestService.getArticle(this.article.id)
    .subscribe(
      data => {
        this.article = data;
        console.log(this.article)
      }
    )
  }
}


