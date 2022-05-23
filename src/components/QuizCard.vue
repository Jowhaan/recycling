<script>
  import QuizProgress from './QuizProgress.vue'
  export default {
    created() {
      this.getQuestions()
      this.getAnswers()
    },
    components: {
      QuizProgress
    },
    watch: {
      answer() {
        if (this.answer !== null) {
          this.nextQuestion()
        }
      },
      questionsIndex() {
        if (this.questionsIndex === 5) {
          if (this.$store.state.loggedIn) {
            this.$store.commit('addPoints', this.score)
          }
        }
      }
    },
    data() {
      return {
        isStarted: false,
        playAgain: false,
        rightAnswer: null,
        continueQuiz: true,
        questions: [],
        answers: [],
        answer: null,
        answersIndex: 0,
        questionsIndex: 0,
        score: 0,
        disableRadio: null,
        indicator: 1,
        indicatorBool: true,
        hover: false
      }
    },
    computed: {
      showIndicator() {
        if (this.isStarted && this.indicatorBool) {
          return true
        } else {
          return false
        }
      },
      onHover() {
        if (this.hover === true) {
          return '../../assets/happyEarthly.svg'
        } else {
          return '../../assets/smileyEarthly.svg'
        }
      }
    },
    methods: {
      //metod för att reseta
      resetQuiz() {
        this.questions = []
        this.answers = []
        this.score = 0
        this.questionsIndex = 0
        this.answersIndex = 0
        this.answer = null
        this.playAgain = false
      },
      //metod för att slumpa 5 quizfrågor
      getQuestions() {
        while (this.questions.length < 5) {
          var randomIndex = Math.floor(
            Math.random() * this.$store.state.quizQuestions.length
          )
          var currentQuestion = this.$store.state.quizQuestions[randomIndex]
          var conflict = false

          for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i] === currentQuestion) {
              conflict = true
            }
          }
          if (!conflict) {
            this.questions.push(currentQuestion)
          }
        }
      },
      getAnswers() {
        //Fyller på en array med 3st svar motsvarande rätt fråga.
        var correctAnswer = this.questions[this.answersIndex].correctAnswer
        this.answers.push(correctAnswer)
        //Om frågan har mer än 2st fel svar (vi behöver 3 totalt)
        //Så måste man slumpa fram 2st
        if (this.questions[this.answersIndex].wrongAnswers.length > 2) {
          while (this.answers.length < 3) {
            var randomIndex = Math.floor(
              Math.random() *
                this.questions[this.answersIndex].wrongAnswers.length
            )
            //Kollar så att inkommande svar inte redan finns i arrayen för svar
            var currentWrongAnswer =
              this.questions[this.answersIndex].wrongAnswers[randomIndex]
            var conflict = false
            for (var i = 0; i < this.answers.length; i++) {
              if (this.answers[i] === currentWrongAnswer) {
                conflict = true
              }
            }
            //Om det inte är konflikt efter att den kollat igenom arrayen så
            //lägger den till felsvaret
            if (!conflict) {
              this.answers.push(currentWrongAnswer)
            }
          }
        }
        //Om det bara finns 2st svar i felsvaren så lägger man in dom
        else {
          this.answers.push(this.questions[this.answersIndex].wrongAnswers[0])
          this.answers.push(this.questions[this.answersIndex].wrongAnswers[1])
        }
        //Blanda arrayen
        this.shuffle(this.answers)
        this.answersIndex++
      },
      nextQuestion() {
        this.continueQuiz = false
        this.checkAnswer()
        this.answer = null
        this.answers = []
        this.questionsIndex++
        if (this.questionsIndex < 5) {
          this.getAnswers()
        }
        this.disableRadio = null
      },
      //Gör en shuffle för arrayer för att slumpa ordningen på svarsalternativen så frågorna inte ser samma ut hela tiden
      shuffle(array) {
        var currentIndex = array.length
        var randomIndex

        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--
          ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
          ]
        }
        this.answers = array
      },
      checkAnswer() {
        if (this.answer === this.questions[this.questionsIndex].correctAnswer) {
          this.score++
          this.rightAnswer = true
        }
      },
      onStart() {
        this.isStarted = true
      },
      onPlayAgain() {
        this.playAgain = true
        this.resetQuiz()
        this.getQuestions()
        this.getAnswers()
        this.indicator = 1
        this.indicatorBool = true
      },
      onContinueQuiz() {
        this.continueQuiz = true
        this.rightAnswer = false
        this.indicator++
        if (this.questionsIndex < 5) {
          this.indicatorBool = true
        } else {
          this.indicatorBool = false
        }
      }
    }
  }
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: white;
    margin: 20px auto;
    border-radius: 20px;
    text-align: center;
  }
  label {
    margin: 10px;
    padding: 10px;
    font-family: 'PoppinsRegular';
  }
  .btn {
    display: block;
    width: auto;
    border-radius: 10px;
  }
  #xbox {
    display: flex;
    justify-content: flex-end;
  }
  #quiz-btn-group {
    width: 250px;
  }
  #quiz-right {
    border: 3px solid var(--bs-success);
    background-color: white;
  }
  #quiz-wrong {
    border: 3px solid var(--bs-danger);
    background-color: white;
  }
  /* Earthly talking */
  #smileyEarthly {
    position: absolute;
    width: 100px;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }

  .chatbubble {
    width: 100%;
    height: 100%;
    display: inline-block;
    background-color: #5ab7a8;
    color: #2b2b2b;
    text-align: left;
    border-radius: 20px;
    padding: 20px;
    margin-top: 20px;
  }
  /* Chatbubble arrow */
  .chatbubble::after {
    content: '';
    position: absolute;
    left: 60%;
    margin: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: #5ab7a8 transparent transparent transparent;
  }
  #quiz-right.chatbubble::after {
    border-color: var(--bs-success) transparent transparent transparent;
  }

  #quiz-wrong.chatbubble::after {
    border-color: var(--bs-danger) transparent transparent transparent;
  }
</style>

<template>
  <QuizProgress :indicator="indicator" :is-hidden="!showIndicator" />
  <div class="card">
    <div id="xbox">
      <RouterLink to="/"><i class="bi bi-x" /></RouterLink>
    </div>
    <!-- QUIZ -->
    <div v-if="continueQuiz">
      <div v-if="isStarted">
        <div v-if="questionsIndex < 5">
          <p>
            <b>
              {{ this.questions[questionsIndex].question }}
            </b>
          </p>
          <div>
            <div
              class="btn-group-vertical"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <div
                id="quiz-btn-group"
                :key="this.answers[index]"
                v-for="(test, index) in this.answers"
              >
                <input
                  v-model="answer"
                  type="radio"
                  :value="test"
                  :checked="this.disableRadio"
                  class="btn-check"
                  :id="index"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" :for="index">{{
                  test
                }}</label>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- RESULT PAGE -->
          <div v-if="playAgain" />
          <div v-else>
            <!-- RESULT PAGE - HIGH SCORE -->
            <div v-if="this.score > 4">
              <h1>Great job!</h1>
              <p>You scored {{ this.score }} out of 5</p>
              <img src="../../assets/platinum.svg" alt="Celebrating Earth" />
              <button class="shadowBtn" @click="onPlayAgain">Play again</button>
            </div>
            <!-- RESULT PAGE - LOW SCORE -->
            <div v-else-if="this.score < 1">
              <h1>You'll get there!</h1>
              <p>You scored {{ this.score }} out of 5</p>
              <p>You need some more practice</p>
              <img src="../../assets/burningEarthly.svg" alt="Burning Earth" />
              <button class="shadowBtn" @click="onPlayAgain">Play again</button>
            </div>
            <!-- RESULT PAGE - MIDDLE SCORE -->
            <div v-else>
              <h1>Good job!</h1>
              <p>You scored {{ this.score }} out of 5</p>
              <img src="../../assets/smileyEarthly.svg" alt="Happy Earth" />
              <p>You could still learn some more about recycling</p>
              <button class="shadowBtn" @click="onPlayAgain">Play again</button>
            </div>
          </div>
        </div>
      </div>
      <!-- START QUIZ PAGE -->
      <div v-else>
        <h1>Recycle Quiz</h1>
        <div class="chatbubble">
          <p>
            Learn more about recycling while competing for nice prizes. Answer
            the questions and collect points. Share your result with friends
            when you're done.
          </p>
          <p
            @mouseover="hover = true"
            @mouseleave="hover = false"
            @click="onStart"
          >
            <u>Let's play!</u>
          </p>
        </div>
        <img id="smileyEarthly" :src="onHover" alt="Smiley Earth" />
      </div>
    </div>
    <!-- RIGHT OR WRONG PAGE -->
    <div v-else @click="onContinueQuiz">
      <p>
        <b>
          {{ this.questions[questionsIndex - 1].question }}
        </b>
      </p>
      <div v-if="rightAnswer">
        <div id="quiz-right" class="chatbubble">
          <p>
            {{ this.questions[questionsIndex - 1].ifRight }}
          </p>
        </div>
        <img
          id="smileyEarthly"
          src="../../assets/happyEarthly.svg"
          alt="Happy Earth"
        />
      </div>
      <div v-else>
        <div id="quiz-wrong" class="chatbubble">
          <p>
            {{ this.questions[questionsIndex - 1].ifWrong }}
          </p>
        </div>
        <img
          id="smileyEarthly"
          src="../../assets/sadEarthly.svg"
          alt="Sad Earth"
        />
      </div>
    </div>
  </div>
</template>
