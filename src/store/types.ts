import { CounterState } from './modules/counter';
import { TodoState } from './modules/todo';

export interface IRootState {
  version: string;
  counter: CounterState;
  todo: TodoState;
}
