<template>
     <div class="p-5">

        <form @submit.prevent="submit">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
      <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
      </div>
      
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
      </div>
</template>

<script>
// Receive cookie from login
// Use cookie to get user
// import axios from 'axios';

const login_url = "http://localhost:8000/api/login"


export default {
  data(){
    return {
      name:'',
      password:'',
        }
    },
    methods:{
        submit(){              
                // axios request
                var axios = require('axios');
                var data = JSON.stringify({
                  "name": this.name,
                  "password": this.password
                });
                var config = {
                  method: 'post',
                  url: login_url,
                  headers: { 
                    'Content-Type': 'application/json'
                  },
                  data : data
                };
                axios(config)
                .then(function (response) {
                  console.log(response.data);
                  localStorage.setItem('jwt',response.data.jwt)
                  // document.cookie = response.data;
                }).then(()=>{
                  this.$router.push('/')
                })
                .catch(function (error) {
                  console.log(error);
                });
          }
      }
      }
      
</script>
