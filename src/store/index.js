import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const STORAGE_KEY = 'note-storage'

export default new Vuex.Store({
  state: {
    notes: [],
    newNote: {},
    editNote: {},
    search: "",
    searchArr: []
  },
  getters: {
    searchByName: (state) => {
      if(state.search !== "") {
        return state.notes.filter(item => {
          return item.name.indexOf(state.search) > -1
        })
      } else {
        return state.notes
      }
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.notes = posts
    },
    addPost(state) {
      state.notes.unshift(state.newNote)
      state.newNote.id = state.notes.length
      state.newNote.postId = state.notes.length
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.newNote))
    },
    removePost(state, item) {
      let id = state.notes.indexOf(item);
      if (id > -1) {
        state.notes.splice(id, 1);
      }
    },
    editPost(state, item) {
      let id = state.notes.indexOf(item);
      if (id !== -1) {
        state.notes[id] = state.editNote;
      }
    },
    setContent(state, item) {
      let id = state.notes.indexOf(item);
      if (id !== -1) {
        state.editNote = state.notes[id]
        state.notes[id] = state.editNote
      }
    },
    saveState(state) {
      console.warn('saveState')
      setTimeout(() => {
        return state.notes.unshift(JSON.parse(localStorage.getItem(STORAGE_KEY || "[]")))
      }, 300)
    },
    searchCommit(state, payload) {
      state.search = payload
    },
    sortPosts(state) {
      return state.notes.sort(function(a, b) {
        return (a.name > b.name) ? 1 : -1
      })
    },
    sortPostsReverse(state) {
      return state.notes.sort(function(a, b) {
        return (b.name > a.name) ? 1 : -1
      })
    }
  },
  actions: {
    getPosts({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
          commit('setPosts', response.data)
        })
    }
  }
})
