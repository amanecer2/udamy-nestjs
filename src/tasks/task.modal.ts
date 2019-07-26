import * as uuid from 'uuid/v1';

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export class TaskModal implements ITask {
  constructor(public description: string,
              public status: TaskStatus,
              public title: string) {
    this.id = uuid();
  }

  id: string;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
