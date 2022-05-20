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
        console.log(this.randomNumber)
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

<template>
  <RouterLink :to="`/tip/${this.randomNumber}`"> Testlänk</RouterLink>

  <div v-if="!amIHidden" id="tipbotbox">
    <div id="tipheaderbox">
      <h3 id="header">Todays tip:</h3>
      <img
        id="earthy"
        src="../../assets/earthly.svg"
        alt="toon"
        @click="clickText"
      />
    </div>

    <div class="dialogbox">
      <p>{{ tipOfTheDay }}</p>
      <i
        @click="goToTipPage(randomNumber)"
        id="tipsarrow"
        class="bi bi-arrow-right"
      />
    </div>
  </div>
</template>
<!-- <button data-bs-target="#myCarousel" data-bs-slide-to="5" /> -->
<!-- <i @click="goToTipPage(randomNumber)" class="bi bi-arrow-right" /> -->

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
    margin-left: 30px;
    margin-right: 30px;
  }
  #header {
    margin-top: 25px;
    margin-left: 10px;
  }
  #earthy {
    margin-left: 73px;
    margin-right: 26px;
    margin-bottom: -5px;
    border-radius: 0%;
  }
  .dialogbox {
    background-color: var(--bs-primary);
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 30px;
    height: fit-content;
    padding: 30px;
  }
  #tipsarrow {
    position: absolute;
    right: 70px;
    bottom: 50px;
    height: 13.5px;
    width: 21px;
  }
  #tipbot {
    position: absolute;
    width: 60px;
    bottom: 0;
    right: 0;
  }
</style>
