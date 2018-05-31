<template>
  <div>
    <div class="row">
      <h1 class="text-center col-12">Note app</h1>
      <div class="col-12 text-center">
        <router-link class="btn btn-success col-4" :to='{name: "AddItem"}'>Add new note</router-link>
      </div>
    </div>
    <div class="row">
      <comment v-if="show" @closed="hideModal" @saved="addComment">
        <template slot="body">
          <form action="">
            <div class="form-group">
              <label for="add-comment">Leave comment please</label>
              <input v-model="comment" type="text" class="form-control" id="add-comment" placeholder="enter text">
            </div>
          </form>
        </template>
      </comment>
      <ul class="list-group col-12">
        <li class="list-group-item note-item" v-for="item in notes">
          <div class="row">
            <h6 class="col-9 note-item__title">{{item.name}}</h6>
            <div class="col-3 note-item__email text-right">{{item.email}}</div>
          </div>
          <div class="row">
            <div class="col-12">{{item.body}}</div>
          </div>
          <div class="row" v-if="item.comments">
            <div class="col-8"><b>Comment: </b>"{{item.comments}}"</div>
            <div class="col-4 text-right"><b>Date comment:</b> {{item.dateComment}}</div>
          </div>
          <div class="w-100"></div>
          <div class="btn-box text-right">
            <button @click="showModal(item)" class="btn btn-success col-2">Add comment</button>
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
  import Comment from './Comment'

  export default {
    data() {
      return {
        show: false,
        comment: "",
        current: {},
        currentTime: ""
      }
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
      }),
      showModal(item) {
        this.current = item
        this.show = true
      },
      hideModal() {
        this.show = false
      },
      addComment() {
        let d = new Date()
        let year = d.getFullYear()
        let mon = d.getMonth() + 1
        let day = d.getDate()
        let hours = d.getHours()
        let min = d.getMinutes()
        let sec = d.getSeconds()
        this.currentTime = day + "/" + mon + "/" + year + "  " + hours + ":" + min + ":" + sec

        if (!this.current.hasOwnProperty('comments')) {
          this.current.comments = this.comment
          this.current.dateComment = this.currentTime
        } else {
          this.current.comments = this.comment
          this.current.dateComment = this.currentTime
        }

        this.comment = ""
        this.show = false
      }
    },
    components: {
      Comment
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
