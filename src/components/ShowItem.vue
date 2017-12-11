<template>
  <div class="text-center">
    id: {{ item.id }}
    <br/>
    title: {{ item.title }}
    <br/>
    <router-link
      :to="{name: 'main_page'}">
      back
    </router-link>
  </div>
</template>


<script>
  import store from '../store/store.js'

  export default {
    data: function(){
      return {}
    },
    mounted (){
      store.dispatch('show_one', this.$route.params.id)
    },
    computed: {
      item: function(){
        return store.getters.getItem
      }
    },
    beforeDestroy(){
      store.dispatch('clear_item')
    }
  }
</script>
