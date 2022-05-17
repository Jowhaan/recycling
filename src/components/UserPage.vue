/* - Error message in RED (incorrect password) - disabled button doesn't work -
avatarBackground into SASS */

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
    },
    computed: {
      userLevel() {
        var currentLvl
        var currentBla
        if (this.currentUser.quizScore >= 100) {
          currentLvl = 'platinum'
          currentBla = ((this.currentUser.quizScore - 100) / 50) * 100
        } else if (
          this.currentUser.quizScore <= 99 &&
          this.currentUser.quizScore >= 60
        ) {
          currentLvl = 'gold'
          currentBla = ((this.currentUser.quizScore - 60) / 30) * 100
        } else if (
          this.currentUser.quizScore <= 59 &&
          this.currentUser.quizScore >= 30
        ) {
          currentLvl = 'silver'
          currentBla = ((this.currentUser.quizScore - 30) / 30) * 100
        } else if (
          this.currentUser.quizScore <= 29 &&
          this.currentUser.quizScore >= 15
        ) {
          currentLvl = 'bronze'
          currentBla = ((this.currentUser.quizScore - 15) / 15) * 100
        } else if (this.currentUser.quizScore <= 15) {
          currentLvl = 'n00b'
          currentBla = (this.currentUser.quizScore / 15) * 100
        }
        return [currentLvl, currentBla]
      }
    }
  }
</script>

<style>
  #center {
    margin: auto;
    text-align: center;
  }

  #avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px;
  }

  #avatarBackground {
    background: linear-gradient(
      to bottom,
      #5ab7a8 0%,
      #5ab7a8 50%,
      #eff3f2 50%,
      #eff3f2 100%
    );
    height: 100%;
    width: 100%;
  }

  #carbonDioxide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #globe {
    margin: 10px;
  }
</style>

<template>
  <div id="center">
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
      <div id="avatarBackground">
        <img id="avatar" :src="currentUser.profilePic" />
      </div>
      <h1>{{ currentUser.userName }}</h1>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          :style="'width: ' + userLevel[1] + '%'"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <div>
        <img :src="'../../assets/' + userLevel[0] + '.svg'" alt="" />
      </div>
      <p>Quiz's taken: {{ currentUser.quizTaken }}</p>
      <p>Total score: {{ currentUser.quizScore }}</p>
      <div id="carbonDioxide">
        <img src="../../assets/globe.svg" alt="globe" id="globe" />
        <p>Saved CO2: {{ currentUser.savedCO2 }}</p>
      </div>
      <button @click="logout" />
    </div>
  </div>
</template>
