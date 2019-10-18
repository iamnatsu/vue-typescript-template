import Vue from 'vue';
import Vuex from 'vuex';
import * as SampleService from '@/services/sample-service';
import { Mutation, Module , VuexModule, Action, getModule } from 'vuex-module-decorators';
import store from '..';

Vue.use(Vuex);

export interface CounterState {
  count: number;
}

@Module({ dynamic: true, store, name: 'counter' })
class Counter extends VuexModule {
  private _count: number = 5;

  @Mutation
  public incriment() {
    this._count++;
  }

  @Mutation
  public decrement() {
    this._count--;
  }

  @Action({ commit: 'incriment' })
  public async increment() {
    await SampleService.get('');
  }

  get count(): number {
    return this._count;
  }
}

export const CounterModule = getModule(Counter);
