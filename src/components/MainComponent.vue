<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h3>Add new item</h3>
        <form name="checkListForm" action="javascript: void(0);">
          <input
            type="text"
            placeholder="Add Item..."
            v-model="getItem.title"
            v-on:keyup.enter="add_item"/>
        </form>
        <button
          type="button"
          class="btn btn-info"
          v-on:click="add_item">
          Add
        </button>
        <button
          type="button"
          title="Clear items"
          class="btn btn-default"
          v-on:click="clear_item">
          clear
        </button>
        <br/>
        <br/>
        <ul class="list-group">
          <list-item v-for="item in getItems"
            v-bind:item="item"
            v-bind:key="item.id">
          </list-item>
        </ul>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
  import store from '../store/store'
  import ListItem from '../components/ListItem.vue'

  export default {
    components: {ListItem: ListItem},
    data: function(){
      return {}
    },
    mounted(){
      store.dispatch('get_all')
    },
    computed: {
      getItems: function(){
        return store.getters.getItems
      },
      getItem: function(){
        return store.getters.getItem
      }
    },
    methods: {
      add_item: function(){
        store.dispatch('create_new', this.getItem.title)
          .then(function(){
            store.dispatch('get_all');
            store.dispatch('clear_item')
          })
          .catch((error)=>{ console.error(error) })
      },
      clear_item: function(){
        store.dispatch('clear_item')
      }
    }
  }
</script>
