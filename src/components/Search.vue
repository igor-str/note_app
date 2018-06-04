<template>
  <div class="col-12 search-item" id="search-item">
    <form>
      <div class="form-group">
        <label for="search"></label>
        <input v-model="search" type="text" class="form-control" id="search" placeholder="search name...">
      </div>
    </form>
    <div class="row sort-row">
      <span class="col-2">Sort notes by name: </span>
      <button @click="sortPosts" class="btn btn-info col-1">A-Z</button>
      <button @click="sortPostsReverse" class="btn btn-warning col-1">Z-A</button>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      search: {
        get() {
          return this.$store.getters.search
        },
        set(value) {
          this.$store.commit("searchCommit", value)
        }
      }
    },
    methods: {
      ...mapMutations({
        sortPosts: 'sortPosts',
        sortPostsReverse: 'sortPostsReverse'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .sort-row {
    align-items: center;
    button {
      margin: 0 5px;
    }
  }
</style>
