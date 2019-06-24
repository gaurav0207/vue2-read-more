import Vue from 'vue'
import readMoreComponent from './components/index.vue'
const readMore = {
  install (Vue) {
    Vue.component('readMore', readMoreComponent)
  }
}
export default readMore
