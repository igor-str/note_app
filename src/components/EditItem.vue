<template>
  <div class="row edit-item" id="edit-item">
    <div class="col-12">
      <form>
        <div class="form-group">
          <label for="edit-name">Name</label>
          <input v-model="editNote.name" type="text" class="form-control" id="edit-name" placeholder="edit name">
        </div>
        <div class="form-group">
          <label for="edit-body">Description</label>
          <input v-model="editNote.body" type="text" class="form-control" id="edit-body" placeholder="edit desc">
        </div>
        <div class="form-group">
          <label for="edit-email">Email address</label>
          <input v-model="editNote.email" type="email" class="form-control" id="edit-email" aria-describedby="emailHelp"
                 placeholder="edit email">
        </div>
        <button type="button" @click.once="editPost(paramsId)" class="btn btn-primary">Save changes</button>
        <router-link class="btn btn-warning" :to='{name: "List"}'>End edit</router-link>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {
        paramsId: this.$route.params.id
      }
    },
    computed: {
      ...mapState({
        notes: 'notes',
        editNote: 'editNote'
      })
    },
    methods: {
      ...mapMutations({
        editPost: 'editPost'
      })
    },
    mounted() {
      this.$store.commit('setContent', this.paramsId)
    }
  }
</script>

<style lang="scss" scoped>
  .edit-item {
    margin: 15px 0;
  }
</style>
