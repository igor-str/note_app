<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import List from './components/List'
  export default {
    name: 'app',
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getPosts')
    },
    components: {
      List
    }
  }
</script>

<style lang="scss">

</style>
