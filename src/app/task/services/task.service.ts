import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = ['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6'];

  constructor() {}

  getTasks(): Observable<string[]> {
    return of(this.tasks).pipe(delay(2000));
  }
}
