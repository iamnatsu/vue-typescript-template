<template>
  <div class="title">
    <h2>
      <slot name="title"></slot>
    </h2>
    <h3>
      <slot name="subtitle"></slot>
    </h3>
    <CurrentUser v-slot:default="slotProps">
      {{ slotProps.user.firstName }}
    </CurrentUser>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import CurrentUser from './CurrentUser.vue'

@Component({
  components: {
    CurrentUser,
  },
})
export default class Title extends Vue {

}
</script>