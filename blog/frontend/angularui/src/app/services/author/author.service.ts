import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './author';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  constructor(private http: HttpClient) { }

  path= environment.path;
  
  authors:Author[]

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.path + "/author")
  }
}