import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../models';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this._productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    })
  }

}
