<template>
  <div class="home">
    Id: {{user_data.id?user_data.id:""}}
    <br>
    Name: {{user_data.name?user_data.name:""}}
  </div>
</template>

<script>
// import axios from 'axios'
// const user_url = "http://127.0.0.1:8000/api/user"

// get data from frontend the request.headers authorization way

export default {
  name: 'HomeView',
  data(){
    return {
      user_data:{}
    }
  },
  async created(){

      console.log(window.localStorage.getItem('jwt'))
      var requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('jwt')
      }
    };

    fetch("http://127.0.0.1:8000/api/user"  
    , requestOptions).then(response => response.text()).then(result => {this.user_data=JSON.parse(result); console.log(result)})
      .catch(error => console.log('error', error));


  }     
}
</script>
