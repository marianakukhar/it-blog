import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from './articles.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/articles"

  getArtticles() {
    return this.http.get<Articles[]>(this.url)
  }

  getArticle(id: number) {
    return this.http.get(this.url + "/" + id)
  }
}
