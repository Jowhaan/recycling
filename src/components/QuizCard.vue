<script>
  export default {
    created() {
      this.getQuestions()
      this.getAnswers()
    },
    watch: {
      answer() {
        if (this.answer !== null) {
          this.nextQuestion()
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
        disableRadio: null
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
          //Måste byta ut '20' till this.$store.state.quizQuestions.length när vi har fyllt med riktiga frågor, blir knas i nuläget
          var randomIndex = Math.floor(Math.random() * 20)
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
      },
      onContinueQuiz() {
        this.continueQuiz = true
        this.rightAnswer = false
      }
    }
  }
</script>
<template>
  <div class="quiz-flex-container">
    <div v-if="continueQuiz">
      <div v-if="isStarted">
        <div class="quiz-item" v-if="questionsIndex < 5">
          <h4>
            {{ this.questions[questionsIndex].question }}
          </h4>
          <div>
            <div
              class="btn-group-vertical"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <template
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
              </template>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-if="playAgain" />
          <div v-else>
            <h1>{{ this.score }}/5</h1>
            <h3 v-if="this.score > 4">Whooo! Greta would be proud</h3>
            <h3 v-else>You still need to learn more about recycling</h3>
            <p @click="onPlayAgain">
              <b>Tryck på denna texten för att Spela igen!</b>
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <h3 id="start-quiz" @click="onStart">Start Quiz</h3>
      </div>
    </div>
    <div v-else @click="onContinueQuiz">
      <h6>{{ this.questions[questionsIndex - 1].question }}</h6>
      <div v-if="rightAnswer">
        <h3>{{ this.questions[questionsIndex - 1].ifRight }}</h3>
      </div>
      <div v-else>
        <h3>{{ this.questions[questionsIndex - 1].ifWrong }}</h3>
      </div>
    </div>
  </div>
</template>
