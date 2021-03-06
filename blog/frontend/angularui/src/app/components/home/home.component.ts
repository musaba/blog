import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Article } from '../../services/article/article';
import { ArticleService } from '../../services/article/article.service';
import { User } from '../../services/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { Author } from '../../services/author/author';
import { AuthorService } from '../../services/author/author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService, UserService,AuthorService]
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private articleService: ArticleService,
    private authorService : AuthorService
  ) { }



  ngOnInit() {

  }

}