import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from '../rest.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: any;
  constructor(private route: ActivatedRoute, private RestService: RestService, private location: Location) { }

  ngOnInit(): void {
    this.article = {
      id: this.route.snapshot.params['id']
    }
    this.RestService.getArticle(this.article.id)
    .subscribe(
      data => {
        this.article = data;
      }
    )
  }

  onBack() {
    this.location.back();
  }
}


