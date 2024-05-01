import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article.model';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private _apiService = inject(ApiService);
  topNews:Article[] = []
  businessNews:Article[] = []
  technologyNews:Article[] = []
  entertainmentNews:Article[] = []
  healtNews:Article[] = []
  scienceNews:Article[] = []
  sportsNews:Article[] = []
  constructor() { }
  ngOnInit(): void {
    this._apiService.getnewsByCategory('general').subscribe(res => {
      this.topNews = res.articles.slice(0,3);
    })
    //get the busines news
    this._apiService.getnewsByCategory('business').subscribe(res => {
      this.businessNews = res.articles.slice(0,4);
    })
    //get the technology news
    this._apiService.getnewsByCategory('technology').subscribe(res => {
      this.technologyNews = res.articles.slice(0,3);
    })
    //get entertainment news
    this._apiService.getnewsByCategory('entertainment').subscribe(res => {
      this.entertainmentNews = res.articles.slice(0,3);
    })
    //get healt news
    this._apiService.getnewsByCategory('health').subscribe(res => {
      this.healtNews = res.articles.slice(0,3)
    })
    //get the science news
    this._apiService.getnewsByCategory('science').subscribe(res => {
      this.scienceNews = res.articles.slice(0,4 )
    })
    //get sport news
    this._apiService.getnewsByCategory('sports').subscribe(res => {
      this.sportsNews = res.articles.slice(0,4)
    })
  }
}
