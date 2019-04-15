import Vue from 'vue';
import Vuex, { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '../types';
import * as SampleService from '@/services/sample-service';

Vue.use(Vuex);

export interface CounterState {
  count: number
}

type State = CounterState;

const state: State = {
  count: 5,
};

const getters: GetterTree<State, any> = {
  getCount: ( s ) => { return s.count }
}

const actions: ActionTree<State, any> = {
  increment: ({ commit }) => {
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