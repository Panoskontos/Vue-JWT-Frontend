import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated:false,
    user_data: {
      'auth':"Not authenticated"
    }
  },
  getters: {
    alluserdata: (state) => state.user_data,
    getauth: (state) => state.authenticated,
  },
  actions: {
    async fetchuserdata({commit}) {
      // const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      // console.log(res.data)
      // commit('settodos', res.data)
      console.log(window.localStorage.getItem('jwt'))
      var requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('jwt')
      }
    };
    fetch("http://127.0.0.1:8000/api/user"  
    , requestOptions).then(response => response.text()).then(result => {
      // this.user_data=JSON.parse(result); 
      commit('setuserdata', JSON.parse(result))
      console.log(result)
      console.log(JSON.parse(result).id?this.state.authenticated=true:this.state.authenticated=false)
      console.log(this.state.authenticated)
    }
      )
      .catch(error => console.log('error', error));
    },

  },


  mutations: {
    setuserdata: (state, user_data) => (state.user_data = user_data),
  },
  modules: {
  }
})
