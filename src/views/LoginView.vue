<template>
  <div>
    <b-card
      title="Login"
      style="max-width: 20rem"
      class="mb-2 mx-auto"
    >
      <b-card-text>
        <b-form-input class="mt-2" v-model="username" placeholder="Username"></b-form-input>
        <b-form-input class="mt-2" v-model="password" type="password" placeholder="Password"></b-form-input>
      </b-card-text>

      <b-button @click="login" variant="primary">Login</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
        username:'',
        password:'',
        
    }
  },
  methods: {
    async login() {
        const requestData = {
            username:this.username,
            password:this.password,
        }
        const response = await fetch('http://localhost:8000/users/login', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
         const responseData = await response.json()
			localStorage.setItem('token', responseData.token)
			this.$router.push({name: 'Home'})
    }
  }
};
</script>