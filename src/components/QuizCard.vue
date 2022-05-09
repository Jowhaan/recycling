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
        correctAnswers: [],
        answers: [],
        answersIndex: 0,
        questionsIndex: 0,
        score: null
      }
    },
    methods: {
      //metod för att reseta
      resetQuiz() {
        this.questions = []
        this.correctAnswers = []
        this.score = null
        this.questionsIndex = 0
        this.answersIndex = 0
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
        //Går via answersIndex på questions[] så efter getQuestions() körts
        //så blir indexet 1 = man fyller på med frågor till fråga 2.
        //Rätt svar ska ju alltid med så den lägger vi till i arrayen med en gång
        var correctAnswer = this.questions[this.answersIndex].correctAnswer
        this.answers.push(correctAnswer)
        //Lägger även till den i komponentens array över rätta svar för att faktiskt kunna rätta dem.
        this.correctAnswers.push(correctAnswer)

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
            //Om det inte är conflict efter att den kollat igenom arrayen så
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
        this.shuffle(this.answers)
        this.answersIndex++
      },
      nextQuestion() {
        this.questionsIndex++
        this.answers = []
        this.checkAnswer()
        if (this.questionsIndex < 5) {
          this.getAnswers()
        }
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
        //Hur får jag tag i vad som klickades på?
      }
    }
  }
</script>
<style>
  .quiz-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 10px 16px;
    border-color: coral;
    border: 2px;
    width: 200px;
    height: 400px;
    border-radius: 5px;
  }
  .quiz-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  #question {
  }
  .answer-container {
  }
</style>
<template>
  <div v-if="questionsIndex < 5" class="quiz-card">
    <p id="question">
      <b>{{ this.questions[questionsIndex].question }}</b>
    </p>
    <div class="answer-container">
      <input type="button" :value="this.answers[0]" />
      <p>{{ '2 ' + this.answers[1] }}</p>
      <p>{{ '3 ' + this.answers[2] }}</p>
      <input type="button" value="Next question" @click="nextQuestion" />
    </div>
  </div>
  <div v-else>
    <QuizResult />
  </div>
</template>
