import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private _apiService = inject(ApiService);
  topNews:Article[] = []
  ngOnInit(): void {
    this._apiService.getTopHeadlines().subscribe(res => {
      this.topNews = res.articles;
    })
  }
}
