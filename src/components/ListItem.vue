<template>
  <li class="list-group-item">
    <router-link
      :to="{name: 'show_item', params: {id: item.id}}">
      <span>{{ item.title }}</span>
    </router-link>
    <button
      class="del_btn"
      type="button"
      v-on:click="del_item">
      X
    </button>
  </li>
</template>


<script>
  import store from '../store/store'

  export default {
    props: ['item'],
    data: function(){
      return {}
    },
    methods: {
      del_item: function(){
        store.dispatch('delete', this.item.id)
          .then(()=>{store.dispatch('get_all')})
          .catch((error)=>{console.error(error)})
      }
    }
  }
</script>
