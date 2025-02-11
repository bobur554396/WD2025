import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Task} from '../models';
import {TaskItemComponent} from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  newTasks: Task[];
  currentTask: Task;
  // autoInc: number = 1;

  constructor() {
    this.newTasks = [];
    this.currentTask = new Task(1, '');
  }

  addTask(){
    if(this.currentTask.name){
      // this.currentTask.id = this.autoInc++;
      this.currentTask.id = Task.autoINC++;
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task(1, '');
    } else {
      alert("Enter task description");
    }
  }

  onTaskItemRemoved(t: Task) {
    // console.log(`Remove task button clicked: ${id}`);
    this.newTasks = this.newTasks.filter((task: Task) => task.id !== t.id);
  }

}
