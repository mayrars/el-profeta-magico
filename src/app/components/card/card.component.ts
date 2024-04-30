import { Component,Input } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() 
  article!: Article;
  
}
