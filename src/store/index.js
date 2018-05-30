import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    newNote: {
      "postId": 1,
      "id": 1,
      "name": "",
      "email": "",
      "body": ""
    }
  },
  getters: {},
  mutations: {
    setPosts(state, posts) {
      state.notes = posts
    },
    addPost (state) {
      state.notes.unshift(state.newNote)
    },
    removePost(state, item) {
      let id = state.notes.indexOf(item);
      if (id > -1) {
        state.notes.splice(id, 1);
      }
    }
  },
  actions: {
    getPosts({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
        .then(response => {
          commit('setPosts', response.data)
        })
    }
  }
})
