<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>

      <!--<list></list>-->
      <list-item></list-item>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import ListItem from './components/ListItem'
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
      ListItem,
      List
    }
  }
</script>

<style lang="scss">

</style>
