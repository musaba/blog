import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author/author.service';
import { ArticleService } from 'src/app/services/article/article.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/services/article/article';
import { User } from 'src/app/services/user/user';
import { Author } from 'src/app/services/author/author';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService, UserService,AuthorService]
})
export class ArticleComponent implements OnInit {
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private articleService: ArticleService,
    private authorService : AuthorService
  ) {  }

  articles: Article[]
  users: User[]
  authors: Author[]

  ngOnInit() {
    this.getAuthors();
    this.activatedRoute.params.subscribe(params => {
      if (params["authorId"] == undefined) {
        this.getAllPost()
      }
      else {
        this.getPost(params["authorId"]);

      }

    })
  }


  getAllPost() {
    this.articleService.getAllPost().subscribe(data => {
      this.articles = data
    })
  }

  getPost(authorId) {
    this.articleService.getPost(authorId).subscribe(data => {
      this.articles = data
    })
  }

  getAuthors() {
    this.authorService.getAuthors().subscribe(data => {
      this.authors = data
    })
  }

}
