import Vue from 'vue';
import Vuex, { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import * as SampleService from '@/services/sample-service';
import { IRootState } from '../types';

Vue.use(Vuex);

export interface CounterState {
  count: number;
}

type State = CounterState;

const state: State = {
  count: 5,
};

const getters: GetterTree<State, IRootState> = {
  getCount: ( counterState ) => counterState.count,
};

const actions: ActionTree<State, IRootState> = {
  increment: ({ commit /*, counterState, rootState */ }) => {
    SampleService.get('').then(() => {
      commit('increment');
    });
  },
};

const mutations: MutationTree<State> = {
  increment(counterState: State) {
    counterState.count++;
  },
  decrement(counterState: State) {
    counterState.count--;
  },
};

export const counter: Module<State, IRootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
