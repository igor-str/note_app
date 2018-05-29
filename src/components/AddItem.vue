<template>
  <div class="row add-item" id="add-item">
    <div class="col-12">
      <form>
        <div class="form-group">
          <label for="edit-name">Name</label>
          <input v-model="newNote.name" type="text" class="form-control" id="edit-name" placeholder="edit name">
        </div>
        <div class="form-group">
          <label for="edit-body">Description</label>
          <input v-model="newNote.body" type="text" class="form-control" id="edit-body" placeholder="edit desc">
        </div>
        <div class="form-group">
          <label for="edit-email">Email address</label>
          <input v-model="newNote.email" type="email" class="form-control" id="edit-email" aria-describedby="emailHelp" placeholder="edit email">
        </div>
        <button type="button" @click.once="addPost" class="btn btn-primary" >Save changes</button>
        <router-link class="btn btn-warning" :to='{name: "List"}'>End edit</router-link>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        notes: 'notes',
        newNote: 'newNote'
      })
    },
    methods: {
      ...mapMutations({
        addPost: 'addPost'
      })
    }
  }
</script>

<style lang="scss" scoped>
.add-item {
  margin: 15px 0;
}
</style>
