<template>
  <div id="app">
    <nav>
      <router-link class="mx-2" to="/home">Home</router-link> |
      <router-link class="mx-2" to="/Signup">Signup</router-link>
      <router-link class="mx-2" to="/login">Login</router-link>
      <router-link class="mx-2" to="/user/<username>">User</router-link>
      <router-link class="mx-2" to="/posts/create">Create post</router-link>
      <router-link class="mx-2" to="/posts/<id>">Post</router-link>
      <button @click="logout">Logout</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { apiFetch } from "./main.js";
export default {
  methods: {
    
 logout() {

  apiFetch("http://localhost:8000/users/logout", {
    method: "GET"
  })

      localStorage.removeItem('token');
      // Redirect the user to the login page
      this.$router.push('/login');
    }
  }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  background: rgb(28, 30, 33);;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
