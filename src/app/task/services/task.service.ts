import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Task } from './../model/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskProvider$;

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(this.initialValues()).pipe(delay(2000));
  }

  addNewTask(newTaskName: string): Observable<Task> {
    const newTask = new Task({ name: newTaskName });
    return of(newTask);
  }

  deleteTask(taskId): Observable<string> {
    return of(taskId);
  }

  /** Return an array of Task as default values */
  private initialValues(): Task[] {
    const initialValues: Task[] = [];
    let nTask = 0;
    while (nTask < 7) {
      initialValues.push(new Task({ name: 'Task ' + ++nTask }));
    }
    return initialValues;
  }
}
