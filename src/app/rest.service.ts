import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './articles.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/articles"

  getArticles() {
    return this.http.get<Article[]>(this.url)
  }

  getArticle(id: number) {
    return this.http.get(this.url + "/" + id)
  }

  postArticle(postData: Article) {
   return this.http.post(this.url, postData);
  }
}
