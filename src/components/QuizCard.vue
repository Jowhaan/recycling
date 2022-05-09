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
        answersIndex: 0,
        questionsIndex: 0,
        score: 0
      }
    },
    methods: {
      //metod för att reseta
      resetQuiz() {
        this.questions = []
        this.score = 0
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
        this.answers = []
        this.checkAnswer()
        this.questionsIndex++
        this.clearRadio()
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
        //Jag måste få tag i vilken som är checked till att börja med
        //Sen måste jag jämföra .checked = true med rätt svar, om det är rätt så blir det poäng!
        var radAnswers = document.getElementsByName('answer')
        for (var i = 0; i < radAnswers.length; i++) {
          if (
            radAnswers[i].checked === true &&
            radAnswers[i].value ==
              this.questions[this.questionsIndex].correctAnswer
          ) {
            this.score++
          }
        }
      },
      //För att dom inte ska vara checked på nästa fråga måste man resetta dom efter varje.
      clearRadio() {
        var radList = document.getElementsByName('answer')
        for (var i = 0; i < radList.length; i++) {
          if (radList[i].checked) radList[i].checked = false
        }
      }
      //Måste ha en metod för att kolla så ett alternativ är valt?
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
    width: 300px;
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
      <div>
        <input name="answer" type="radio" :value="this.answers[0]" />
        <label>
          {{ this.answers[0] }}
        </label>
      </div>
      <div>
        <input name="answer" type="radio" :value="this.answers[1]" />
        <label>
          {{ this.answers[1] }}
        </label>
      </div>
      <div>
        <input name="answer" type="radio" :value="this.answers[2]" />
        <label>
          {{ this.answers[2] }}
        </label>
      </div>
      <input type="button" @click="nextQuestion" value="Next question" />
    </div>
  </div>
  <div v-else>
    <QuizResult :score="this.score" />
  </div>
</template>
