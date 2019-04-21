<template>
  <div class="todoList">
    <h3>Tasks</h3>
    <div v-for="task in tasks" :key="task.id">
      <span>{{task.name}}</span><button @click="handleDel(task.id)">del</button>
    </div>
    <input type="text" v-model="inputTaskName" placeholder="input task..." />
    <button @click="handleAdd">add</button>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-module-decorators';
import todo from '@/store/modules/todo';
import { TaskState } from '../model/task';

@Component({})
export default class TodoList extends Vue {
  // data
  private inputTaskName: string = '';

  // computed
  private get tasks() {
    return todo.tasks;
  }

  // methods
  private handleAdd() {
    if (!this.inputTaskName) { alert('please input task name'); }
    todo.push({id: 'id_' + (new Date()).toISOString(), name: this.inputTaskName, state: TaskState.WAITING});
  }

  private handleDel(id: string) {
    // TODO
  }
}
</script>