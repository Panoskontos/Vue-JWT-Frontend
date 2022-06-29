<template>
    <div>
        Logout view
    </div>
</template>

<script >
export default {
    created(){
        var axios = require('axios');

        var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/api/logout',
        headers: { }
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });

        localStorage.clear()

            }
        }

</script>