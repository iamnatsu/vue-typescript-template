<template>
  <div class="todo">
    <Title>
      <template v-slot:title>
        This is TODO page.
      </template>
      <template v-slot:subtitle>
        for example
      </template>
      <template v-slot:hasScope>
        {{ todo.user.firstName }}
      </template>
    </Title>
    <TodoList />
    <button v-on:click='handleClick'>test</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue';
import TodoList from '@/components/TodoList.vue';
import { mapGetters, Store } from 'vuex';

@Component({
  components: {
    Title,
    TodoList,
  },
  /*
  computed: {
    ...mapGetters('todo', { tasks: 'tasks'})
  },*/
})
export default class Todo extends Vue {
  /*
  // props
  @Prop() val!: string;
  // data
  value: string = this.val;
  */

  // computed
  private get todo() {
    return this.$store.state.todo;
  }

  /** hooks https://vuejs.org/v2/api/#Options-Lifecycle-Hooks */
  private created() {
    console.log('created');
    this.$on('hoge', (msg: string) => {
      console.log('onHoge:' + msg);
    });
  }
  private beforeMount() { console.log('beforeMount'); }
  private mounted() { console.log('mounted'); }

  // methods
  private handleClick() {
    this.emitHoge('hage');
  }
  @Emit('hoge')
  private emitHoge(msg: string) { /* NOP */ } // 呼び出し時の引数の型を定義できる

  /*
  @Watch('value')
  watchValue() {
    console.log('watch' + this.value);
  }
  */
}
</script>
