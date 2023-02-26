<template>
  <div>
    <b-card
      title="Login"
      style="max-width: 20rem"
      class="mb-2 mx-auto card-color"
    >
      <b-card-text>
        <b-form-input class="mt-2 form-color" v-model="username" placeholder="Username"></b-form-input>
        <b-form-input class="mt-2 form-color" v-model="password" type="password" placeholder="Password"></b-form-input>
      </b-card-text>

     <b-button  @click="login" class="bg-dark post-btn">Login</b-button>
      <p class="mt-2  ">Dont have an account ? <router-link  to="/Signup">Signup</router-link></p>
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
        const response = await fetch('https://dimitarvuik.pythonanywhere.com/users/login', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
        if (!response.ok){
          alert('invalid credentials')
          return;
        }
         const responseData = await response.json()
			localStorage.setItem('token', responseData.token)
			this.$router.push({name: 'home'})
    }
  },
  created() {
     if (localStorage.getItem('token')){
      this.$router.push({name: 'home'})

     }
  }
};
</script>

<style>
.card-color{
   background-color: #303338 !important;
}
.form-color {
 color: white !important;
 background-color:#222427 !important;
}
</style>