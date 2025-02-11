import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../models';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() remove = new EventEmitter();

  constructor() {
    this.task = new Task(1, '');
  }

  removeTask() {
    // console.log(this.task);
    this.remove.emit(this.task.id);
  }

}
