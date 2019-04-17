<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld2 msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyComponent from '@/components/MyComponent.ts'; // @ is an alias to /src
import HelloWorld2 from '@/components/HelloWorld2.vue';

@Component({
  components: {
    HelloWorld2,
    MyComponent,
  },
})
export default class Home extends Vue {}
</script>
