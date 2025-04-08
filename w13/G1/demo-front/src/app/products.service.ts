import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL = 'http://localhost:8000/';
  constructor(private client: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }
}
