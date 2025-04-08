import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, Product} from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL = 'http://localhost:8000';

  constructor(private client: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }
}
