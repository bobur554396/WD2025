import {Component, OnInit} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CategoriesService} from './categories.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'demo';

  logged: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private _categoriesService: CategoriesService) {
  }

  ngOnInit() {
    let access = localStorage.getItem('access');
    if(access){
      this.logged = true;
    }
  }

  login() {
    this._categoriesService.login(this.username, this.password).subscribe((token) => {
      localStorage.setItem('access', token.access);
      localStorage.setItem('refresh', token.refresh);

      this.username = '';
      this.password = '';
      this.logged = true;
    })
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }
}
