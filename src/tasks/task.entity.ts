import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { TaskStatus } from './task.modal';

@Entity()
export class TaskEntity extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
