import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  logged = false;
  username: string = '';
  password: string = '';

  constructor(private _productService: ProductsService) {
  }


  login() {
    this._productService.login(this.username, this.password).subscribe((data) => {
      this.logged = true;
      localStorage.setItem('access', data.access);
      this.username = '';
      this.password = '';
    });
  }

  logout(){
    this.logged = false;
    localStorage.removeItem('access');
  }
}
