import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(TaskRepository)
export class TaskRepository extends Repository<TaskRepository> {

}
