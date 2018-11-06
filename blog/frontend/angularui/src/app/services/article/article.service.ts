import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Article } from './article';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http: HttpClient) { }
  path = environment.path;
  articles: Article[];
  getPost(authorId): Observable<Article[]> {
    if (authorId) {
      return this.http.get<Article[]>(this.path + "/article/authorId")
    }
  }

  getAllPost(): Observable<Article[]> {
    return this.http.get<Article[]>(this.path + "/article")
  }

}