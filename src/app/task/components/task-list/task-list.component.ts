import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Task } from './../../model/task';
import { Store } from '@ngrx/store';
import { IAppState } from './../../state/models/app-state';
import { Observable } from 'rxjs';
import * as taskActions from './../../state/actions/task.actions';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  tasks: Observable<Task[]>;
  newTask: string = '';
  constructor(private store: Store<IAppState>) {
    this.tasks = this.store.select(state => state.tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.store.dispatch(new taskActions.LoadTaskAction());
  }

  addNewTask() {
    if (this.newTask !== '') {
      this.store.dispatch(new taskActions.AddNewTaskAction(this.newTask));
      this.newTask = '';
    }
  }

  deleteTask(taskId: string) {
    this.store.dispatch(new taskActions.DeleteTaskAction(taskId));
  }
}
