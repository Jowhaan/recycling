/* - Error message in RED (incorrect password) - disabled button doesn't work -
avatarBackground into SASS */

<script>
  export default {
    data() {
      return {
        userName: '',
        password: '',
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
            this.$store.commit('login', i)
            /* this.loggedIn = true
            this.currentUser = this.$store.state.personalProfiles[i] */
          } else {
            this.errorMessage = 'Incorrect username and/or password'
          }
        }
      },
      checkLevel(user) {
        let userScore = {
          level: '',
          lvlProgress: '',
          pointsLeft: '',
          lvlMessage: ''
        }
        if (user.quizScore >= 100) {
          userScore.level = 'platinum'
          userScore.lvlProgress = 472
          userScore.lvlMessage = 'You made it! You are a recycling Hero!'
        } else if (user.quizScore <= 99 && user.quizScore >= 60) {
          userScore.level = 'gold'
          userScore.pointsLeft = 40 - (user.quizScore - 60)
          userScore.lvlProgress = 472 - ((user.quizScore - 60) / 40) * 472
          userScore.lvlMessage = 'Gold level! and going towards Hero!'
        } else if (user.quizScore <= 59 && user.quizScore >= 30) {
          userScore.level = 'silver'
          userScore.pointsLeft = 30 - (user.quizScore - 30)
          userScore.lvlProgress = 472 - ((user.quizScore - 30) / 30) * 472
          userScore.lvlMessage = 'Silver level! and going towards Gold!'
        } else if (user.quizScore <= 29 && user.quizScore >= 15) {
          userScore.level = 'bronze'
          userScore.pointsLeft = 15 - (user.quizScore - 15)
          userScore.lvlProgress = 472 - ((user.quizScore - 15) / 15) * 472
          userScore.lvlMessage = 'Bronze level! and going towards Silver!'
        } else if (user.quizScore <= 15) {
          userScore.level = 'n00b'
          userScore.pointsLeft = 15 - user.quizScore
          userScore.lvlProgress = 472 - (user.quizScore / 15) * 472
          userScore.lvlMessage = 'Start a quiz to begin your recycling journey!'
        }
        return userScore
      }
    },
    /* Räknar ut en persons level för att visa rätt buckla och hur långt det är kvar till nästa level så att det kan markeras i cirkeln. En full cirkel är 472. */
    computed: {
      scoreboard() {
        let scoreboard = this.$store.state.personalProfiles
        /* scoreboard.sort(
          (firstScore, secondScore) => firstScore.quizScore - secondScore.quizScore
        ) */
        console.log(scoreboard)
        return scoreboard
      },
      user() {
        var user = this.checkLevel(this.$store.state.currentUser)
        /*
        let user = {
          level: '',
          lvlProgress: '',
          pointsLeft: '',
          lvlMessage: ''
        }
        if (this.$store.state.currentUser.quizScore >= 100) {
          user.level = 'platinum'
          user.lvlProgress = 472
          user.lvlMessage = 'You made it! You are a recycling Hero!'
        } else if (
          this.$store.state.currentUser.quizScore <= 99 &&
          this.$store.state.currentUser.quizScore >= 60
        ) {
          user.level = 'gold'
          user.pointsLeft = 40 - (this.$store.state.currentUser.quizScore - 60)
          user.lvlProgress =
            472 - ((this.$store.state.currentUser.quizScore - 60) / 40) * 472
          user.lvlMessage = 'Gold level! and going towards Hero!'
        } else if (
          this.$store.state.currentUser.quizScore <= 59 &&
          this.$store.state.currentUser.quizScore >= 30
        ) {
          user.level = 'silver'
          user.pointsLeft = 30 - (this.$store.state.currentUser.quizScore - 30)
          user.lvlProgress =
            472 - ((this.$store.state.currentUser.quizScore - 30) / 30) * 472
          user.lvlMessage = 'Silver level! and going towards Gold!'
        } else if (
          this.$store.state.currentUser.quizScore <= 29 &&
          this.$store.state.currentUser.quizScore >= 15
        ) {
          user.level = 'bronze'
          user.pointsLeft = 15 - (this.$store.state.currentUser.quizScore - 15)
          user.lvlProgress =
            472 - ((this.$store.state.currentUser.quizScore - 15) / 15) * 472
          user.lvlMessage = 'Bronze level! and going towards Silver!'
        } else if (this.$store.state.currentUser.quizScore <= 15) {
          user.level = 'n00b'
          user.pointsLeft = 15 - this.$store.state.currentUser.quizScore
          user.lvlProgress =
            472 - (this.$store.state.currentUser.quizScore / 15) * 472
          user.lvlMessage = 'Start a quiz to begin your recycling journey!'
        } */
        return user
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

  .scoreboardPic {
    width: 30px;
    height: 30px;
    border-radius: 50%;
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

  /* Animering av level cirkeln. KAN MAN ANVÄNDA BOOTSTRAP SASS FÖR ATT NÅ DEN?*/
  @keyframes anim {
    100% {
      stroke-dashoffset: 0;
    }
  }
</style>

<template>
  <div id="center">
    <div v-if="!this.$store.state.loggedIn">
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
    <div v-if="this.$store.state.loggedIn">
      <div id="avatarBackground">
        <img id="avatar" :src="this.$store.state.currentUser.profilePic" />
      </div>
      <h1>{{ this.$store.state.currentUser.userName }}</h1>
      <p>{{ user.lvlMessage }}</p>
      <div id="userLevel">
        <div class="levelProgress">
          <div>
            <img :src="'../../assets/' + user.level + '.svg'" alt="" />
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
              :style="'stroke-dashoffset: ' + user.lvlProgress"
            />
          </svg>
        </div>
      </div>
      <p>{{ user.pointsLeft }} points until next level</p>
      <!-- Ligger kvar för sprint 3
       <div id="carbonDioxide">
        <img src="../../assets/globe.svg" alt="globe" id="globe" />
        <p>Saved CO2: {{ currentUser.savedCO2 }}</p>
      </div> -->
      <table class="table">
        <thead>
          <tr>
            <th colspan="2" scope="col">Score board</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img
                class="scoreboardPic"
                :src="'../../assets/' + scoreboard[0].profilePic"
                alt=""
              />
            </th>
            <td>Cup</td>
            <td>{{ scoreboard[0].userName }}</td>
            <td>{{ scoreboard[0].quizScore }}</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                class="scoreboardPic"
                :src="'../../assets/' + scoreboard[1].profilePic"
                alt=""
              />
            </th>
            <td>Cup</td>
            <td>{{ scoreboard[1].userName }}</td>
            <td>{{ scoreboard[1].quizScore }}</td>
          </tr>
          <tr>
            <th scope="row">
              <img
                class="scoreboardPic"
                :src="'../../assets/' + scoreboard[2].profilePic"
                alt=""
              />
            </th>
            <td>Cup</td>
            <td>{{ scoreboard[2].userName }}</td>
            <td>{{ scoreboard[2].quizScore }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
