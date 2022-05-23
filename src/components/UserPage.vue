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
          } else {
            this.errorMessage = 'Incorrect username and/or password'
          }
        }
      },
      submitForm() {
        this.login() // one get input value
      },
      /* Räknar ut en persons level för att visa rätt buckla och hur långt det är kvar till nästa level så att det kan markeras i cirkeln. En full cirkel är 472. */
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
    computed: {
      /* Kopierar personal-profiles arrayen och sorterar den så att de med högst poäng hamnar först för att sedan publicera i scoreboard. */
      scoreboard() {
        let scoreboard = [...this.$store.state.personalProfiles]
        scoreboard.sort(
          (firstScore, secondScore) =>
            firstScore.quizScore - secondScore.quizScore
        )
        scoreboard.reverse()
        return scoreboard
      },
      /* Hämtar info om vilken level den inloggade användaren är */
      user() {
        var user = this.checkLevel(this.$store.state.currentUser)
        return user
      }
    }
  }
</script>

<style scoped>
  #center {
    margin: auto;
    text-align: center;
  }

  input {
    display: block;
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
    margin: 10px;
  }

  #outer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    background-color: #eff3f2;
    border-radius: 50%;
    border-style: solid;
    border-color: #f3e6b5;
    border-width: 10px;
  }

  #inner {
    width: 140px;
    height: 140px;
    background-color: #eff3f2;
    border-radius: 50%;
  }

  #form {
    margin: 30px;
  }

  #errorMsg {
    color: red;
    margin: 20px;
  }

  .login {
    border-radius: 20px;
    border-style: solid;
    border-color: #5ab7a8;
    border-width: 2px;
    margin: 20px auto;
    padding: 10px;
  }

  .shadowBtn {
    width: 100px;
  }

  .scoreboardPic {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .scoreboardCup {
    width: 30px;
    height: 30px;
  }

  .levelProgress {
    width: 160px;
    height: 160px;
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

  /* Används för animering av levelcirkeln
  @keyframes anim {
    100% {
      stroke-dashoffset: 0;
    }
  } */
</style>

<template>
  <div id="center">
    <!-- LOGIN PAGE -->
    <div id="form" v-if="!this.$store.state.loggedIn">
      <input
        class="form-control login"
        v-model="userName"
        type="text"
        placeholder="Username"
      />
      <input
        class="form-control login"
        v-model="password"
        type="password"
        placeholder="Password"
        @keyup.enter="submitForm"
      />
      <button
        class="shadowBtn"
        @click="login"
        :disabled="userName.length === 0 || password.length === 0"
      >
        Login
      </button>
      <p id="errorMsg">{{ errorMessage }}</p>
    </div>
    <!-- PROFILE PAGE  -->
    <div v-if="this.$store.state.loggedIn">
      <div id="avatarBackground">
        <img
          id="avatar"
          :src="this.$store.state.currentUser.profilePic"
          alt="Profile Picture"
        />
      </div>
      <h1>{{ this.$store.state.currentUser.userName }}</h1>
      <p>{{ user.lvlMessage }}</p>
      <div id="userLevel">
        <div id="outer">
          <div class="levelProgress">
            <div>
              <img
                :src="'../../assets/' + user.level + '.svg'"
                :alt="user.level"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
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
      </div>
      <p>{{ user.pointsLeft }} points until next level</p>
      <!-- Ligger kvar för sprint 3
       <div id="carbonDioxide">
        <img src="../../assets/globe.svg" alt="globe" id="globe" />
        <p>Saved CO2: {{ currentUser.savedCO2 }}</p>
      </div> -->
      <!-- SCOREBOARD -->
      <table class="table">
        <thead>
          <tr>
            <th colspan="2" scope="col">Score board</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="leaders in scoreboard" :key="leaders.userId">
            <th scope="row">
              <img
                class="scoreboardPic"
                :src="'../../assets/' + leaders.profilePic"
                alt="Profile Picture"
              />
            </th>
            <td>
              <img
                class="scoreboardCup"
                :src="'../../assets/' + checkLevel(leaders).level + '.svg'"
                :alt="checkLevel(leaders).level"
              />
            </td>
            <td>{{ leaders.userName }}</td>
            <td>{{ leaders.quizScore }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
