
import Vue from 'vue';
import Vuex, { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '../types';
import { Task } from '@/model/task';

Vue.use(Vuex);

export interface ToDoState {
  tasks: Task[];
}

type State = ToDoState;

const state: State = {
  tasks: []
};

const getters: GetterTree<State, RootState> = {
  getTasks: ( s ) => { return s.tasks }
}

const actions: ActionTree<State, RootState> = {
  push: ({ commit }, task: Task) => {
    commit('push', task);
  }
}

const mutations: MutationTree<State> = {
  push: (state: State, task: Task) => {
    state.tasks.push(task);
  }
}

export const todo: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};