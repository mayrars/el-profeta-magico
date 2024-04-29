import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article.model';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink,UpperCasePipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
  private _router = inject(ActivatedRoute)
  private _apiService = inject(ApiService);
  category: string = ''
  newsCategory: Article[] = []
  ngOnInit(): void {
    this.category = this._router.snapshot.params['title']
    //get news by category name
    this._apiService.getnewsByCategory(this.category).subscribe(data => {
      this.newsCategory = data.articles
      console.log(this.newsCategory)
    })
  }
}
