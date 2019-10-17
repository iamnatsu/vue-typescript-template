import { CounterModule } from '../../store/modules/counter'

export default class Counter  {
  public incriment() {
    CounterModule.increment();
  }

  public minus() {
    CounterModule.decrement();
  }

  public c() {
    return CounterModule.count;
  }

  public count() {
    return CounterModule.getCount;
  }
}

/*
{
  computed: { 
    ...mapState({
      count: (state: IRootState) => {
        CounterModule.increment()
      }
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
};

その他記法１
methods: mapMutations('counter', [
  'increment',
  'decrement'
]),
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
}
*/