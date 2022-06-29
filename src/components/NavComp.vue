<template>
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <router-link to="/login">
            <button class="btn btn-outline-success m-2" type="button">Login</button>
        </router-link>
        <router-link to="/register">
            <button class="btn btn btn-outline-secondary m-2" type="button">Register</button>
        </router-link>
        <router-link to="/">
            <button class="btn btn btn-outline-secondary m-2" type="button">Home</button>
        </router-link>
        <router-link to="/logout">
            <button class="btn btn btn-outline-secondary m-2" type="button">Logout</button>
        </router-link>
      </form>
    </nav>
</template>

