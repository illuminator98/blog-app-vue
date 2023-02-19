<template>
  <div>
    <b-card
      title="Signup"
      style="max-width: 20rem"
      class="mb-2 mx-auto"
    >
      <b-card-text>
        <b-form-input class="mt-2" v-model="username" placeholder="Username"></b-form-input>
        <b-form-input class="mt-2" v-model="email" type="email" placeholder="Email"></b-form-input>
        <b-form-input class="mt-2" v-model="password" type="password" placeholder="Password"></b-form-input>
        <b-form-input class="mt-2" v-model="confirmPassword" type="password" placeholder="Confirm Password"></b-form-input>
      </b-card-text>

      <b-button @click="signup" variant="primary">Signup</b-button>
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
        const requestData = {
            username:this.username,
            password:this.password,
        }
        const response = await fetch('http://localhost:8000/users/signup', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
        console.log(response)
    }
  }
};
</script>
