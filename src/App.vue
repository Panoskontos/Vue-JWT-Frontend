<template>

    <div class="p-2">
      
      <NavComp/>                  
      <router-view/>


    </div>

</template>
<script>
import NavComp from "./components/NavComp.vue";
// import LoginComp from './views/LoginComp.vue'
// import RegisterView from './views/RegisterView.vue'

export default {
  components: {
    NavComp,
    // LoginComp,
    // RegisterView,
  }
}
</script>
<style>
</style>
