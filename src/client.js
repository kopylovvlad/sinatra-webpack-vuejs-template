import axios from 'axios'

export default (function(){
  return{

    get_all: function(){
      return axios.get('/api/items')
    },

    create_new: function(title){
      return axios.post('/api/items', {title: title})
    },

    show_one: function(id){
      return axios.get('/api/items/' + id)
    },

    delete: function(id){
      return axios.delete('/api/items/' + id)
    }
  };
})();
