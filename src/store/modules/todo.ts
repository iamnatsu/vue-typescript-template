import { Mutation, Action, VuexModule, getModule, Module } from 'vuex-module-decorators';
import store from '@/store/index';
import { Task, TaskState } from '@/model/task';

export interface TodoState {
  tasks: Task[];
}

@Module({ dynamic: true, store, name: 'todo', namespaced: true })
class Todo extends VuexModule {
  // state
  private _tasks: Task[] = [
    { id: '1', name: 'first task', state: TaskState.DONE},
    { id: '2', name: 'second task', state: TaskState.WIP},
    { id: '3', name: 'third task', state: TaskState.WAITING},
  ];

  get tasks() {
    return this._tasks;
  }

  @Action
  public push(task: Task) {
    this.PUSH(task);
  }

  @Mutation
  private PUSH(task: Task) {
    this.tasks.push(task);
  }
}
const todo = getModule(Todo);
export default todo;


/*
export interface ToDoState {
  tasks: Task[];
}

type State = ToDoState;

const state: State = {
  tasks: [
    { id: '1', name: 'first task', state: TaskState.DONE},
    { id: '2', name: 'second task', state: TaskState.WIP}
  ]
};

const getters: GetterTree<State, IRootState> = {
  getTasks: ( s ) => { return s.tasks }
}

const actions: ActionTree<State, IRootState> = {
  push: ({ commit }, task: Task) => {
    commit('push', task);
  }
}

const mutations: MutationTree<State> = {
  push: (state: State, task: Task) => {
    state.tasks.push(task);
  }
}

export const todo: Mo<State, IRootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
*/
