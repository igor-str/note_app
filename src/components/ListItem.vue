<template>
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
          <button class="btn btn-primary col-2">Change note</button>
          <button class="btn btn-danger col-2">Delete note</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState({
        notes: 'notes'
      })
    }
  }
</script>

<style lang="scss" scoped>
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
