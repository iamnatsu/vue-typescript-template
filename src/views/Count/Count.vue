<template>
  <div class="count">
    <h1>This is a count page</h1>
    {{count()}}
    <button @click="increment()">+</button>
    <button @click="minus()">-</button>
    {{ c() }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CounterModule } from '../../store/modules/counter'

@Component
export default class Counter extends Vue {
  public increment() {
    CounterModule.increment();
  }

  public minus() {
    CounterModule.decrement();
  }

  public c() {
    return CounterModule.count;
  }

  public count() {
    return CounterModule.count;
  }
}

</script>