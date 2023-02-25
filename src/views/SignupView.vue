<template>
  <div>
    <b-card
      title="Signup"
      style="max-width: 20rem"
      class="mb-2 mx-auto card-color"
    >
      <b-card-text>
        <b-form-input class="mt-2 form-color" v-model="username" placeholder="Username"></b-form-input>
        <b-form-input class="mt-2 form-color" v-model="email" type="email" placeholder="Email"></b-form-input>
        <b-form-input class="mt-2 form-color" v-model="password" type="password" placeholder="Password"></b-form-input>
        <b-form-input class="mt-2 form-color" v-model="confirmPassword" type="password" placeholder="Confirm Password"></b-form-input>
      </b-card-text>
      <b-button  @click="signup" class="bg-dark post-btn">Signup</b-button>
            
              
      <p class="mt-2 mb-0" >Already have an account ?<router-link  to="/login">Log in</router-link></p>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
    }
  },
  methods: {
     
    async signup() {
      if (!this.email || !this.password || !this.username) {
				alert("All fields are required!");
				return;
			}
			if (this.password !== this.confirmPassword) {
				alert("Passwords do not match!");
				return;
			}
      
        const requestData = {
            username:this.username,
            password:this.password,
        }
        const response = await fetch('https://dimitarvuik.pythonanywhere.com/users/signup', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
        console.log(response)
        this.$router.push({name: 'login'})
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
.post-btn :hover {
  color: #42b983 !important;
}
.post-btn {
  
  color: whitesmoke !important ;
  padding-left: 30% !important;
  padding-right: 30% !important ;
  }
body{
  height: 100% !important ;
  background-color: rgb(28, 30, 33) !important;
}
</style>
