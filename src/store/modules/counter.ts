import Vue from 'vue';
import Vuex from 'vuex';
import * as SampleService from '@/services/sample-service';
import { Mutation, Module , VuexModule, Action, getModule } from "vuex-module-decorators";
import store from '..';

Vue.use(Vuex);

export interface CounterState {
  count: number
}

@Module({ dynamic: true, store, name: "counter" })
class Counter extends VuexModule {
  count: number = 5;

  @Mutation
  public incriment() {
    this.count++;
  }

  @Mutation
  public decrement() {
    this.count--
  }

  @Action({ commit: 'incriment' })
  public async increment() {
    await SampleService.get('');
  }

  get getCount(): number {
    return this.count;
  }
}

export const CounterModule = getModule(Counter);