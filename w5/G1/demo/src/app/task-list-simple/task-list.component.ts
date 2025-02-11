import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-list-simple',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  newTasks: string[] = [];
  display: string = "";

  constructor() {
    console.log(this.newTasks);
  }

  addTask(){
    if(this.display) {
      this.newTasks.push(this.display);
      this.display = "";
    } else {
      alert("Enter task description");
    }
  }
}
