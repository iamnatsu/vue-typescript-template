export interface Task {
  name: string;
  state: TaskState;
}

export enum TaskState {
  WAITING = 'WAITING',
  WIP = 'WIP',
  DONE = 'DONE',
}