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
//<script src='./script.ts' />
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import { RootState } from '../../store/types';

export default {
  computed: { 
    ...mapState({
      count: (state: RootState) => state.counter.count
    }),
    ...mapGetters('counter', {
      c: 'getCount',
    })
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
      console.dir(this.$store)
      console.log("hoge")
      this.$store.dispatch("counter/increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }*/
};
</script>