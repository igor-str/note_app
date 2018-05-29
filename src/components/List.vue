<template>
  <div class="row">
    <div class="col-12 text-center">
      <router-link class="btn btn-success" :to='{name: "AddItem"}'>Add new note</router-link>
    </div>
  </div>
</template>

<script>
  import AddItem from './AddItem'
  export default {
    data() {
      return {}
    },
    computed: {

    },
    components: {
      AddItem
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    margin: 15px 0;
  }
</style>
