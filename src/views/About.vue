<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld2 msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script>
import HelloWorld2 from '@/components/HelloWorld2.vue';
import MyComponent from '@/components/MyComponent.ts';

export default {
  components: { HelloWorld2, MyComponent }
}
</script>
