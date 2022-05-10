<script>
  export default {
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

<template>
  <div v-if="playAgain" />
  <div v-else>
    <h1>{{ this.finalScore }}/5</h1>
    <h3 v-if="this.finalScore > 4">Whooo! Greta would be proud</h3>
    <h3 v-else>You still need to learn more about recycling</h3>
  </div>
</template>
