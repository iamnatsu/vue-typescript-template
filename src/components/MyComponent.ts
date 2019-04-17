import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'MyComponent',
  template: '<div><p @click="onClick">{{hoge}}</p></div>'
})
export default class MyComponent extends Vue {
  // data
  hoge : string = 'こんにちは'

  // methods
  onClick(){
    this.hoge = 'さようなら'
  }

}