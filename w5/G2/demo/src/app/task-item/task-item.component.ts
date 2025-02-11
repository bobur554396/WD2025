import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../models';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() remove = new EventEmitter();

  constructor() {
    this.task = new Task(1, '');
  }

  removeTask(){
    this.remove.emit(this.task);
  }

}
