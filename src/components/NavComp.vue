<template>
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <router-link v-if="alluserdata.detail"  to="/login">
            <button class="btn btn-outline-success m-2" type="button">Login</button>
        </router-link>
        <router-link v-if="alluserdata.detail" to="/register">
            <button class="btn btn btn-outline-secondary m-2" type="button">Register</button>
        </router-link>
        <router-link v-if="alluserdata.id" to="/">
            <button class="btn btn btn-outline-secondary m-2" type="button">Home</button>
        </router-link>
            <router-link v-if="alluserdata.id" to="/logout">
                <button class="btn btn btn-outline-secondary m-2" type="button">Logout</button>
            </router-link>
      </form>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
     computed: mapGetters(['alluserdata']),
}
</script>