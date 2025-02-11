import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {TaskListComponent} from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
