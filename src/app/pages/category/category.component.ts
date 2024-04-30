import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink,TitleCasePipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
  private _route = inject(ActivatedRoute)
  private _apiService = inject(ApiService);
  category: string = ''
  newsCategory: Article[] = []
  ngOnInit(): void {    
    this._route.params.subscribe({
      next: (params: Params)=>{
        //get news by category name
        this.category = params['title']
        this._apiService.getnewsByCategory(params['title']).subscribe(data => {
          this.newsCategory = data.articles
          console.log(this.newsCategory)
        })
      },
      error: (err: any)=>{
        console.log(err)
      }
    })
  }
}
