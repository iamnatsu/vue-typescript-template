export interface Task {
  id: string;
  name: string;
  state: TaskState;
}

export enum TaskState {
  WAITING = 'WAITING',
  WIP = 'WIP',
  DONE = 'DONE',
}
