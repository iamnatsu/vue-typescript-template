import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import { counter, CounterState } from './modules/counter'
import { todo, ToDoState } from './modules/todo'
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    counter,
    todo,
  },
  state: {
    version: "",
    counter: counter.state as CounterState,
    todo: todo.state as ToDoState,
  } 
};

export default new Vuex.Store(store);
