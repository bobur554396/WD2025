import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, Category} from './model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  BASE_URL = 'http://localhost:8000';

  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username,
      password,
    })
  }

  getCategories(): Observable<Category[]> {
    return this.client.get<Category[]>(`${this.BASE_URL}/api/categories`);
  }

  createCategory(name: string): Observable<Category> {
    return this.client.post<Category>(`${this.BASE_URL}/api/categories/`,  {
      name
    })
  }
}
