import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import { AppState } from '../../store/index'

export default {
  computed: { 
    ...mapState({
      count: (state: AppState) => state.counter.count
    }),
    ...mapGetters('counter', {
      c: 'getCount'
    })
  },
  methods: {
    ...mapMutations('counter', {
      plus: 'increment',
      minus: 'decrement'
    }),
    ...mapActions('counter', {
      increment: 'increment'
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