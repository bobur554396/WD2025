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
  title: string = 'KBTU';
  numbers: number[] = [2, 4, 6, 1, 8];
  message: string = "Some text";
  isOk: boolean = true;

  btnClicked() {
    console.log("btn was clicked");
    // if(this.isOk){
    //   this.isOk = false;
    // } else {
    //   this.isOk = true;
    // }
    this.isOk = !this.isOk;
  }
}
