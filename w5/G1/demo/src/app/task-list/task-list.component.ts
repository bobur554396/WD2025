import {Component} from '@angular/core';
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
  doneTasks: Task[];
  currentTask: Task;

  // incId: number = 0;

  constructor() {
    // console.log(this.newTasks);
    this.doneTasks = [];
    this.newTasks = [new Task(1, 'task 1'),
      new Task(2, 'task 2'),];
    this.currentTask = new Task(1, '');
  }

  addTask() {
    if (this.currentTask.name) {
      // this.currentTask.id = ++this.incId;
      this.currentTask.id = Task.curID++;
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task(1, ''); // reset currentTask object
    } else {
      alert("Enter task description");
    }
  }

  onTaskItemRemoved(id: number) {
    this.newTasks = this.newTasks.filter((task) => task.id !== id);
  }
}
