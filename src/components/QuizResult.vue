<script>
  import QuizCard from '../components/QuizCard.vue'
  export default {
    components: { QuizCard },
    data() {
      return {
        finalScore: this.score,
        playAgain: false
      }
    },
    methods: {
      onClick() {
        this.playAgain = true
      }
    },
    props: {
      score: { type: Number, default: 0 }
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
</style>
<template>
  <div v-if="playAgain">
    <QuizCard />
  </div>
  <div v-else class="quiz-card">
    <h1>{{ this.finalScore }}/5</h1>
    <h3 v-if="this.finalScore > 4">Whooo! Greta would be proud</h3>
    <h3 v-else>You still need to learn more about recycling</h3>
    <p @click="onClick">Take the quiz again</p>
  </div>
</template>
