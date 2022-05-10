<script>
  import QuizCard from '../components/QuizCard.vue'
  export default {
    components: { QuizCard },
    data() {
      return {
        isStarted: false
      }
    },
    methods: {
      onClick() {
        this.isStarted = true
      }
    }
  }
</script>

<template>
  <div v-if="isStarted">
    <QuizCard />
  </div>
  <div v-else>
    <h3 @click="onClick">Start Quiz</h3>
  </div>
</template>
