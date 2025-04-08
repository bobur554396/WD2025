import {Component, OnInit} from '@angular/core';
import {Category} from '../model';
import {RouterModule} from '@angular/router';
import {CategoriesService} from '../categories.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  newCategoryName = '';

  constructor(private _categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  addCategory() {
    this._categoriesService.createCategory(this.newCategoryName).subscribe((category) => {
      this.categories.push(category);
      this.newCategoryName = '';
    })
  }
}
