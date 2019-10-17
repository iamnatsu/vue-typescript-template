import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export interface IRootState {
  counter: CounterState
}

export default new Vuex.Store<IRootState>({});

import { CounterState } from './modules/counter'
