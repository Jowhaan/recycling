<script>
  export default {
    data() {
      return {
        randomNumber: 0
      }
    },
    props: {
      amIHidden: {
        type: Boolean
      }
    },
    methods: {
      getRandomNumber() {
        this.randomNumber = Math.floor(
          Math.random() * this.$store.state.quizQuestions.length
        )
        return this.randomNumber
      },
      goToTipPage() {}
    },
    computed: {
      tipOfTheDay() {
        return this.$store.state.quizQuestions[this.getRandomNumber()].tip
      }
    }
  }
</script>

<style lang="scss" scoped>
  #tipbotbox {
    visibility: visible;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 83px;
    margin-top: 19px;
    left: 30px;
    right: 30px;
  }
  #tipheaderbox {
    display: flex;
    justify-content: space-between;
  }
  #header {
    @media (max-width: 310px) {
      font-size: 17px;
    }
    margin-top: 35px;
    margin-left: 10px;
  }
  #earthy {
    margin-right: 26px;
    margin-bottom: -2px;
    margin-top: auto;
    border-radius: 0%;
    min-width: 0%;
  }
  #tipsarrow {
    position: absolute;
    right: 30px;
    bottom: 40px;
    height: 13.5px;
    width: 21px;
  }
</style>

<template>
  <div v-if="!amIHidden" id="tipbotbox">
    <div id="tipheaderbox">
      <h3 id="header">Todays tip:</h3>
      <img id="earthy" src="../../assets/earthly.svg" alt="toon" />
    </div>

    <div class="dialogbox">
      <p>{{ tipOfTheDay }}</p>
      <RouterLink :to="`/tip/${this.randomNumber}`"
        ><i id="tipsarrow" class="bi bi-arrow-right"
      /></RouterLink>
    </div>
  </div>
</template>
