<template>
  <div class="current-user">
    <span>
      <slot v-bind:user="user">{{ user.lastName }}</slot>
    </span>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { User } from '../model/user';

@Component
export default class CurrentUser extends Vue {
  // data
  user: User = {
    id: "nwada",
    firstName: "natsuho",
    lastName: "wada"
  }
}
</script>