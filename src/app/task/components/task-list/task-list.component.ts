import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: string[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }
}
