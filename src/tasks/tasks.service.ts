import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskModal, TaskStatus } from './task.modal';
import { CreateTaskDto } from './dto/createTask.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private _tasks: TaskModal[] = [
    new TaskModal('init des', TaskStatus.DONE, 'init title'),
    new TaskModal('init des2', TaskStatus.OPEN, 'init title2'),
    new TaskModal('init des3', TaskStatus.IN_PROGRESS, 'init title3'),
  ];

  get tasks(): TaskModal[] {
    return this._tasks;
  }

  getTaskWithFilters({ status, search }: GetTasksFilterDto) {
    let tasks = this.tasks;
    if (status) {
      tasks = tasks.filter(t => t.status === status);
    }

    if (search) {
      tasks = tasks.filter(t =>
        t.description.includes(search) || t.title.includes(search));
    }
    return tasks;
  }

  createTask({ description, title }: CreateTaskDto) {
    const task = new TaskModal(description, TaskStatus.OPEN, title);
    this._tasks.push(task);
    return task;
  }

  getTaskById(id: string) {
    const task =  this._tasks.find((t: TaskModal) => t.id === id);
    if (!task) {
      throw new NotFoundException('i love big buts');
    }
    return task;
  }

  deleteTaskById(id: string) {
    const found = this.getTaskById(id); // validation
    const temp = this._tasks.filter(t => t.id !== id);
    if (temp.length < this._tasks.length) {
      this._tasks = temp;
      return true;
    }
    return true;
  }

  updateTaskStatus(id: string, newStatus: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = newStatus;
    return newStatus;
  }
}
