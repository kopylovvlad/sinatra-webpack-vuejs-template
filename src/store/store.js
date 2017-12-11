import Vue from 'vue'
import Vuex from 'vuex'
import client from './../client/client.js'
Vue.use(Vuex);

const state = {
  items: [],
  item: {
    title: ''
  }
};

const actions = {
  get_all(context){
    let _this = this
    client.get_all()
      .then(function(response){
        _this.commit('load_items', response.data)
      })
      .catch(function(error) {
        console.error('error in get_all')
        console.error(error)
      })
  },

  create_new(context, title){
    return client.create_new(title)
  },

  show_one(context, id){
    let _this = this
    client.show_one(id)
      .then(function(response){
        _this.commit('load_item', response.data)
      })
      .catch(function(error) {
        console.error('error in show_one')
        console.error(error)
      })
  },

  delete(context, id){
    return client.delete(id)
  },

  clear_item(context){
    context.commit('clear_item')
  }
};

const mutations = {
  load_items (context, data){
    context.items = data.items
  },

  load_item (context, data){
    context.item = data.item
  },

  clear_items (context){
    context.items = []
  },

  clear_item(context){
    context.item = { title: '' }
  }
};

const getters = {
  getItem (state){
    return state.item
  },
  getItems (state){
    return state.items
  },
};

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

