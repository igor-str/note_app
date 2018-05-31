<template>
  <div>
    <div class="row">
      <div class="col-12 text-center">
        <router-link class="btn btn-success col-4" :to='{name: "AddItem"}'>Add new note</router-link>
      </div>
    </div>
    <div class="row">
      <ul class="list-group col-12">
        <li class="list-group-item note-item" v-for="item in notes">
          <div class="row">
            <h6 class="col-9 note-item__title">{{item.name}}</h6>
            <div class="col-3 note-item__email">{{item.email}}</div>
          </div>
          <div class="row">
            <div class="col-12">{{item.body}}</div>
          </div>
          <div class="w-100"></div>
          <div class="btn-box text-right">
            <router-link class="btn btn-primary col-2" :to='{name: "EditItem", params: {id: item} }'>Edit note
            </router-link>
            <button @click="removePost(item)" :key="item.id" class="btn btn-danger col-2">Delete note</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import AddItem from './AddItem'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState({
        notes: 'notes',
      })
    },
    methods: {
      ...mapMutations({
        removePost: 'removePost',
        editPost: 'editPost'
      })
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

  .note-item {
    &__title {
      text-transform: uppercase;
      font-weight: 900;
    }
    &__email {
      font-size: 14px;
    }
  }
</style>
