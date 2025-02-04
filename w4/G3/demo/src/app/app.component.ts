import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ɵASYNC_ANIMATION_LOADING_SCHEDULER_FN } from '@angular/platform-browser/animations/async';

interface IProduct {
  name: string;
  price: number;
  count: number;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'KBTU';
  numbers: number[] = [4, 2, 1, 5];
  message: string = 'Some random text';
  isOk: boolean = true;
  products: IProduct[] = [
    {
      name: "Product 1",
      price: 1000,
      count: 10
    },
    {
      name: "Product 2",
      price: 2000,
      count: 5
    },
    {
      name: "Product 3",
      price: 3000,
      count: 12
    },
    {
      name: "Product 4",
      price: 10000,
      count: 2
    },
  ];
  display: string = "";
  tasks: string[] = [];
  

  toggleText() {
    console.log('btn was clicked');
    // this.isOk = false;
    // if(this.isOk)
    //   this.isOk = false;
    // else
    //   this.isOk = true;
    this.isOk = !this.isOk;
  }

  addTask(){
    // console.log('clicked');
    // console.log(this.display);
    if(this.display){
      this.tasks.push(this.display);
      this.display = '';
    } else {
      alert("Please, enter your task description");
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }


}
