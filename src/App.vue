<template>
  <div id="app">
    <nav>
      <router-link class="mx-2" to="/home"
        ><button v-if="!displayLoginSignupBtns" to="/home" class="btn btn-primary bg-dark">
          Home
        </button></router-link
      >
      <router-link v-if="displayLoginSignupBtns" class="mx-2" to="/Signup"
        >Signup</router-link
      >
      <router-link v-if="displayLoginSignupBtns" class="mx-2" to="/login">Login</router-link>
      <button v-if="!displayLoginSignupBtns" class="btn btn-primary bg-dark" @click="logout">Logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { apiFetch } from "./main.js";
export default {
  computed: {
    displayLoginSignupBtns() {
      return ['signup', 'login'].includes(this.$route.name)
    },
  },
  methods: {
    logout() {
      apiFetch("http://localhost:8000/users/logout", {
        method: "GET",
      });

      localStorage.removeItem("token");
      // Redirect the user to the login page
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  background: rgb(28, 30, 33);
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
