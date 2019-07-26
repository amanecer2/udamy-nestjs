import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { TaskStatus } from './task.modal';

@Injectable()
export class TasksStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
    TaskStatus.DONE,
  ];

  transform(status: any, metadata?: ArgumentMetadata) {
    if (!this.isStatusAllow(status)) {
      throw new BadRequestException('bad doog request');
    }
    return status;
  }

  private isStatusAllow(status): boolean {
    return this.allowedStatus.includes(status);
  }
}
