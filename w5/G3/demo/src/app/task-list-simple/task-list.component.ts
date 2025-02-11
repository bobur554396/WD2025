import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  newTasks: string[];
  currentTask: string;

  constructor() {
    this.newTasks = [];
    this.currentTask = '';
  }

  addTask() {
    // console.log(this.currentTask);
    if(this.currentTask) {
      this.newTasks.push(this.currentTask);
      this.currentTask = '';
    } else {
      alert("Enter your task description");
    }
  }
}
