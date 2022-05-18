<script>
  import { RouterLink } from 'vue-router'

  export default {
    // data() {
    //   return {
    //     isActive: true,
    //     randomNumber: 0
    //   }
    // },
    // // Need to redo functions to work more like vue [Jennie]
    methods: {
      getRandomNumber() {
        this.randomNumber = Math.floor(
          Math.random() * this.$store.state.quizQuestions.length
        )
        console.log(this.randomNumber)
        return this.randomNumber
      },
      goToTipPage() {}
      // onClick() {
      //   this.isActive = !this.isActive
      //   console.log(this.isActive)
      // }
      // clickText() {
      //   this.randomNumber = Math.floor(
      //     Math.random() * this.$store.state.quizQuestions.length
      //   )
      //   var popup = document.getElementById('myPopup')
      //   popup.classList.toggle('show')
      // },
      // goToTipPage(tipNum) {
      //   console.log(tipNum)
      // }
    },
    computed: {
      tipOfTheDay() {
        return this.$store.state.quizQuestions[this.getRandomNumber()].tip
      }
    }
    // computed: {
    //   tipOfTheDay() {
    //     return this.$store.state.quizQuestions[this.randomNumber].tip
    //   }
    // }
  }
</script>

<template>
  <RouterLink to="/tip"> Testlänk</RouterLink>
  <div id="tipbotbox">
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

  <!-- <div class="popup">
    <span class="popuptext" id="myPopup">
      <p>Did you know that...</p>
      <p>{{ tipOfTheDay }}</p>


      <i @click="goToTipPage(randomNumber)" class="bi bi-arrow-right" />
    </span>
    <img
      id="tipbot"
      src="../../assets/earthly.svg"
      alt="toon"
      @click="clickText"
    />
  </div> -->
</template>
<!-- <button data-bs-target="#myCarousel" data-bs-slide-to="5" /> -->
<!-- <i @click="goToTipPage(randomNumber)" class="bi bi-arrow-right" /> -->

<style lang="scss" scoped>
  #tipbotbox {
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

  /* Popup container */
  // .popup {
  //   width: 100%;
  //   height: 100%;
  //   display: inline-block;
  //   cursor: pointer;
  // }

  // /* The actual popup (appears on top) */
  // .popup .popuptext {
  //   visibility: hidden;
  //   width: 160px;
  //   background-color: rgb(117, 250, 141);
  //   color: rgb(6, 0, 0);
  //   text-align: center;
  //   border-radius: 6px;
  //   padding: 8px 0;
  //   margin: 10px;
  //   position: absolute;
  //   z-index: 1;
  //   bottom: 50px;
  //   right: 0;
  // }

  // /* Popup arrow */
  // .popup .popuptext::after {
  //   content: '';
  //   position: absolute;
  //   top: 100%;
  //   left: 80%;
  //   margin-left: -5px;
  //   border-width: 5px;
  //   border-style: solid;
  //   border-color: rgb(117, 250, 141) transparent transparent transparent;
  // }

  // /* Toggle this class when clicking on the popup container (hide and show the popup) */
  // .popup .show {
  //   visibility: visible;
  //   -webkit-animation: fadeIn 1s;
  //   animation: fadeIn 1s;
  // }

  // /* Add animation (fade in the popup) */
  // @-webkit-keyframes fadeIn {
  //   from {
  //     opacity: 0;
  //   }
  //   to {
  //     opacity: 1;
  //   }
  // }

  // @keyframes fadeIn {
  //   from {
  //     opacity: 0;
  //   }
  //   to {
  //     opacity: 1;
  //   }
  // }
</style>
