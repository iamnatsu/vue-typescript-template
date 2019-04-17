import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld2 extends Vue {
  @Prop() private msg2!: string;
}