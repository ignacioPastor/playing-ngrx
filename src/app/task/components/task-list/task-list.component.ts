import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Task } from './../../model/task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(res => {
      console.log('res: ', res);
      this.tasks = res;
    });
  }

  saveTask() {
    if (this.newTask !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }
}
