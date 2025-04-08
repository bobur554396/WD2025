import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryProductsComponent} from './category-products/category-products.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Home page"},
  {path: 'about', component: AboutComponent, title: "About page"},
  {path: 'posts', component: PostsComponent, title: "Posts page"},
  {path: 'posts/:id', component: PostDetailComponent, title: "Post detail page"},
  {path: 'categories', component: CategoriesComponent, title: "Categories page"},
  {path: 'categories/:id/products', component: CategoryProductsComponent, title: "Category Products page"},
];
