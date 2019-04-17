import Vue from 'vue';
import Vuex, { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import * as SampleService from '@/services/sample-service';
import { RootState } from '../types';

Vue.use(Vuex);

export interface CounterState {
  count: number
}

type State = CounterState;

const state: State = {
  count: 5,
};

const getters: GetterTree<State, RootState> = {
  getCount: ( s ) => { return s.count }
}

const actions: ActionTree<State, RootState> = {
  increment: ({ commit, state, rootState }) => {
    SampleService.get('').then(() => {
      commit('increment')
    });
  }
}

const mutations: MutationTree<State> = {
  increment(state: State) {
    state.count++;
  },
  decrement(state: State) {
    state.count--;
  }
}

export const counter: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};