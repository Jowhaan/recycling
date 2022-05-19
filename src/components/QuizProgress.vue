<script>
  export default {
    data() {
      return {}
    },
    props: {
      indicator: {
        type: Number,
        default: 0
      }
    }
  }
</script>
<style>
  .quiz-progress {
    display: flex;
    padding: 25px;
    justify-content: center;
  }
  .quiz-dot {
    font-size: 50px;
    line-height: 10px;
  }
</style>
<template>
  <div class="quiz-progress">
    <span
      class="quiz-dot"
      :style="{
        color:
          indicator === number
            ? 'var(--bs-search-icon-color)'
            : 'var(--bs-primary)'
      }"
      v-for="number in [1, 2, 3, 4, 5]"
      :key="number"
      >•</span
    >
  </div>
</template>
