import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleByTopicComponent } from './article-by-topic/article-by-topic.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'articles/:topic', component: ArticleByTopicComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
