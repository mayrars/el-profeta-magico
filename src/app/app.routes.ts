import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ArticleComponent } from './pages/article/article.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'category/:title', component:CategoryComponent},
    {path:'article/:title', component:ArticleComponent},
    {path:'contact',component:ContactComponent},
    {path:'**', component:PageNotFoundComponent}
];
