import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Article } from './article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http: HttpClient) { }
  path = environment.path;
  articles: Article[];

  getPost(Id): Observable<Article[]> {
    let headers = new HttpHeaders()
    headers.append("Content-Type", "aplication/json")
    headers.append("Accept", "aplication/json")
    var body = { authorId: Id }
    if (Id) {
      return this.http.post<Article[]>(this.path + "/article/Id", body, { headers: headers });
    }
  }

  getAllPost(): Observable<Article[]> {
    return this.http.get<Article[]>(this.path + "/article")
  }

}