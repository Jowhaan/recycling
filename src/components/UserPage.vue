<script>
  export default {
    data() {
      return {
        userName: '',
        password: '',
        loggedIn: false,
        currentUser: '',
        message: ''
      }
    },
    methods: {
      login() {
        for (let i = 0; i < this.$store.state.personalProfiles.length; i++) {
          if (
            this.userName === this.$store.state.personalProfiles[i].userName &&
            this.password === this.$store.state.personalProfiles[i].password
          ) {
            this.loggedIn = true
            this.currentUser = this.$store.state.personalProfiles[i]
            console.log(this.loggedIn)
            console.log(this.currentUser)
          } else {
            this.message = 'Incorrect username and/or password'
          }
        }
      },
      logout() {
        this.loggedIn = false
        this.currentUser = ''
        console.log(this.loggedIn)
        console.log(this.currentUser)
      }
    }
  }
</script>

<style>
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
</style>

<template>
  <div v-if="!loggedIn">
    <input v-model="userName" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <input
      type="button"
      value="Login"
      @click="login"
      :disabled="userName.length === 0 && password.length === 0"
    />
    <p>{{ message }}</p>
  </div>
  <div v-if="loggedIn">
    <img :src="currentUser.profilePic" />
    <h1>{{ currentUser.userName }}</h1>
    <p>Quiz's taken: {{ currentUser.quizTaken }}</p>
    <p>Total score: {{ currentUser.quizScore }}</p>
    <p>Saved CO2: {{ currentUser.savedCO2 }}</p>

    <button @click="logout" />
  </div>
</template>
