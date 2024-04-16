import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient)
  private apiUrl = environment.apiUrl;
   
  getTopHeadlines():Observable<any> {
    return this.http.get(`${this.apiUrl}/top-headlines?country=us&category=general&apiKey=${environment.apiKey}`)
  }
}
