import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import { RootState } from './types'
import { counter, CounterState } from './modules/counter'

Vue.use(Vuex);

export interface AppState {
  counter: CounterState
}

const store: StoreOptions<RootState> = {
  state: {
      version: '1.0.0'
  },
  modules: {
      counter
  }
};

export default new Vuex.Store(store);
