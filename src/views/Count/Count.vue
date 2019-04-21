<template>
  <div class="count">
    <h1>This is a count page</h1>
        {{count}}
    <button @click="increment">+</button>
    <button @click="minus">-</button>
  {{ c }}
  </div>
</template>

<script lang='ts'>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
import { IRootState } from '../../store/types';

export default {
  computed: {
    ...mapState({
      count: (state: IRootState) => state.counter.count,
    }),
    ...mapGetters('counter', {
      c: 'getCount',
    }),
  },
  methods: {
    ...mapMutations('counter', {
      plus: 'increment',
      minus: 'decrement',
    }),
    ...mapActions('counter', {
      increment: 'increment',
    }),
  },
  /*
  その他記法１
  methods: mapMutations('counter', [
    'increment',
    'decrement'
  ]),
  */
  /*
  その他記法２
  methods: {
    increment() {
      this.$store.dispatch("counter/increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }*/
};
</script>