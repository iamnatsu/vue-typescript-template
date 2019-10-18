import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import { IRootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<any> = {
  state: {
    version: 'v0.1.0',
  },
};

// 'vuex-module-decorators' Modules (dynamic: true) dynamicaly redist later
export default new Vuex.Store<IRootState>(store);
