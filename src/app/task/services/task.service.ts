import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Task } from './../model/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private taskProvider$;

  constructor() {
    this.populateInitialTasks();
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks).pipe(delay(2000));
  }

  addTask(newTask: string) {
    this.tasks.push(new Task({ name: newTask }));
  }

  removeTask(taskId) {
    this.tasks.splice(this.tasks.findIndex(task => task.id === taskId), 1);
  }

  private populateInitialTasks() {
    const myTask: Task = new Task({ name: 'mhol' });
    let nTask = 7;
    while (nTask > 0) {
      this.tasks.push(new Task({ name: 'Task ' + nTask-- }));
    }
    this.tasks.reverse();
  }
}
