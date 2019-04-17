import { CounterState } from './modules/counter';
import { ToDoState } from './modules/todo';

export interface RootState {
  version: string;
  counter: CounterState,
  todo: ToDoState
}