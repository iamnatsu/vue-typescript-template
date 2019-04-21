import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import { counter, CounterState } from './modules/counter';
import { IRootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<any> = {
  modules: {
    counter,
  },
  state: {
    version: 'v0.1.0',
    counter: counter.state as CounterState,
  },
};

// 'vuex-module-decorators' Modules (dynamic: true) dynamicaly redist later
export default new Vuex.Store<IRootState>(store);
