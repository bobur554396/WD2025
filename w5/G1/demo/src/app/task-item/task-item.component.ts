import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../models';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule,],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() remove = new EventEmitter();

  constructor() {
    this.task = new Task(1, '')
  }

  itemRemove(id: number) {
    this.remove.emit(id);
  }

}
