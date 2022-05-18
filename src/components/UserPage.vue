/* - Error message in RED (incorrect password) - disabled button doesn't work -
avatarBackground into SASS */

<script>
  export default {
    data() {
      return {
        userName: '',
        password: '',
        loggedIn: true,
        currentUser: this.$store.state.personalProfiles[1],
        errorMessage: ''
      }
    },
    methods: {
      /* Jämför lösen och användarnamn och läser in rätt användare till currentUser */
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
            this.errorMessage = 'Incorrect username and/or password'
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
    /* Räknar ut en persons level för att visa rätt buckla och hur långt det är kvar till nästa level så att det kan markeras i cirkeln. En full cirkel är 472. */
    computed: {
      userLevel() {
        var currentLvl = 0
        var currentLvlProgress = 0
        var pointsLeft = 0
        var lvlMessage = 0
        if (this.currentUser.quizScore >= 100) {
          currentLvl = 'platinum'
          currentLvlProgress = 472
          lvlMessage = 'You made it! You are a recycling Hero!'
        } else if (
          this.currentUser.quizScore <= 99 &&
          this.currentUser.quizScore >= 60
        ) {
          currentLvl = 'gold'
          pointsLeft = 40 - (this.currentUser.quizScore - 60)
          currentLvlProgress =
            472 - ((this.currentUser.quizScore - 60) / 40) * 472
          lvlMessage = 'Gold level! and going towards Hero!'
        } else if (
          this.currentUser.quizScore <= 59 &&
          this.currentUser.quizScore >= 30
        ) {
          currentLvl = 'silver'
          pointsLeft = 30 - (this.currentUser.quizScore - 30)
          currentLvlProgress =
            472 - ((this.currentUser.quizScore - 30) / 30) * 472
          lvlMessage = 'Silver level! and going towards Gold!'
        } else if (
          this.currentUser.quizScore <= 29 &&
          this.currentUser.quizScore >= 15
        ) {
          currentLvl = 'bronze'
          pointsLeft = 15 - (this.currentUser.quizScore - 15)
          currentLvlProgress =
            472 - ((this.currentUser.quizScore - 15) / 15) * 472
          lvlMessage = 'Bronze level! and going towards Silver!'
        } else if (this.currentUser.quizScore <= 15) {
          currentLvl = 'n00b'
          pointsLeft = 15 - this.currentUser.quizScore
          currentLvlProgress = 472 - (this.currentUser.quizScore / 15) * 472
          lvlMessage = 'Start a quiz to begin your recycling journey!'
        }
        return [currentLvl, currentLvlProgress, pointsLeft, lvlMessage]
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

  #userLevel {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .levelProgress {
    width: 160px;
    height: 160px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    position: absolute;
  }

  circle {
    fill: none;
    stroke: #ffa828;
    stroke-width: 10px;
    stroke-dasharray: 472;
    /* stroke-dashoffset: 165; */
    /* animation: anim 2s linear forwards; */
  }

  @keyframes anim {
    100% {
      stroke-dashoffset: 0;
    }
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
      <p>{{ errorMessage }}</p>
    </div>
    <div v-if="loggedIn">
      <div id="avatarBackground">
        <img id="avatar" :src="currentUser.profilePic" />
      </div>
      <h1>{{ currentUser.userName }}</h1>
      <p>{{ userLevel[3] }}</p>
      <div id="userLevel">
        <div class="levelProgress">
          <div>
            <img :src="'../../assets/' + userLevel[0] + '.svg'" alt="" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
              :style="'stroke-dashoffset: ' + userLevel[1]"
            />
          </svg>
        </div>
      </div>
      <p>{{ userLevel[2] }} points until next level</p>
      <!--
      <p>Quiz's taken: {{ currentUser.quizTaken }}</p>
      <p>Total score: {{ currentUser.quizScore }}</p>
       <div id="carbonDioxide">
        <img src="../../assets/globe.svg" alt="globe" id="globe" />
        <p>Saved CO2: {{ currentUser.savedCO2 }}</p>
      </div> -->
      <button @click="logout" />
    </div>
  </div>
</template>
