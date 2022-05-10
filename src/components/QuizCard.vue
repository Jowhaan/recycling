<script>
  import QuizResult from '../components/QuizResult.vue'
  export default {
    created() {
      this.getQuestions()
      this.getAnswers()
    },
    components: {
      QuizResult
    },
    data() {
      return {
        questions: [],
        answers: [],
        answer: null,
        answersIndex: 0,
        questionsIndex: 0,
        score: 0,
        disableRadio: null
      }
    },
    computed: {
      //Tvingar användaren att välja ett av de tre svaren
      isDisabled() {
        if (this.answer !== null) {
          return false
        } else {
          return true
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
        }
      }
    }
  }
</script>
<template>
  <div v-if="questionsIndex < 5">
    <p id="question">
      <b>{{ this.questions[questionsIndex].question }}</b>
    </p>
    <div>
      <div>
        <input
          v-model="answer"
          name="answer"
          type="radio"
          :value="this.answers[0]"
          :checked="this.disableRadio"
        />
        <label>
          {{ this.answers[0] }}
        </label>
      </div>
      <div>
        <input
          v-model="answer"
          name="answer"
          type="radio"
          :value="this.answers[1]"
          :checked="this.disableRadio"
        />
        <label>
          {{ this.answers[1] }}
        </label>
      </div>
      <div>
        <input
          v-model="answer"
          name="answer"
          type="radio"
          :value="this.answers[2]"
          :checked="this.disableRadio"
        />
        <label>
          {{ this.answers[2] }}
        </label>
      </div>
      <input
        type="button"
        :disabled="isDisabled"
        @click="nextQuestion"
        value="Next question"
      />
    </div>
  </div>
  <div v-else>
    <QuizResult :score="this.score" />
  </div>
</template>
