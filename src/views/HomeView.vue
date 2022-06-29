<template>
  <div class="home">
    This is Home
  </div>
</template>

<script>
// import axios from 'axios'
// const user_url = "http://127.0.0.1:8000/api/user"

// get data from frontend the request.headers authorization way

export default {
  name: 'HomeView',
  async created(){
      console.log(window.localStorage.getItem('jwt'))
      var requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('jwt')
      }
    };

    fetch("http://127.0.0.1:8000/api/user"  
    , requestOptions).then(response => response.text()).then(result => console.log(result))
      .catch(error => console.log('error', error));


  }     
}
</script>
