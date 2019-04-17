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
    <MyComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue';
import MyComponent from '@/components/MyComponent.ts';

@Component({
  components: {
    Title,
    MyComponent,
  },
})
export default class Todo extends Vue {
  private get user() {
    console.dir(this.$store.state)
    return this.$store.state.todo.user;
  }
  private get todo() {
    console.dir(this.$store.state)
    return this.$store.state.todo;
  }
}
</script>
