import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hello KBTU!';
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  btnClicked() {
    console.log('clicked');
  }
}
