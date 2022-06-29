<template>
     <div class="p-5">

<form @submit.prevent="submit">
    <!-- username -->
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
      <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    
    <!-- password -->
    <div class="mb-3">
        <label for="exampleInputPassword2" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword2">
      </div>

    <!-- confirm -->
    <div class="mb-3">
        <label for="exampleInputPassword3" class="form-label">Password Confirm</label>
        <input v-model="password_confirm"  type="password" class="form-control" id="exampleInputPassword3">
    </div>
      
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
      </div>
</template>

<script>
// Find way to use router
// Find way to login
// Find way to get data of user

const reg_url = "http://127.0.0.1:8000/api/register"

export default {
    data(){
        return {
            name:'',
            password:'',
            password_confirm:'',
        }
    },
    methods:{
        
        async submit(){
            let valid = false
            this.password === this.password_confirm ? valid =true : valid=false
            console.log(valid) 
            if (valid){
                
                let data = {
                    name: this.name,
                    password:this.password,
                }


                await fetch(reg_url, 
                {
                    method:'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(data)
                })

                this.$router.push('/login')

            }
        }
    }

}
</script>