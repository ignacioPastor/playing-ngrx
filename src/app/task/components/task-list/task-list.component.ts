import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Task } from './../../model/task';
import { Store } from '@ngrx/store';
import { IAppState } from './../../../state/models/app-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Observable<Task[]>;
  newTask: string = '';
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    // this.taskService.getTasks().subscribe(res => {
    //   this.tasks = res;
    // });

    this.tasks = this.store.select(state => state.tasks);
  }

  saveTask() {
    // if (this.newTask !== '') {
    //   this.taskService.addTask(this.newTask);
    //   this.newTask = '';
    // }
  }

  removeTask(taskId: string) {
    // this.taskService.removeTask(taskId);
  }
}
