<script>
  export default {
    data() {
      return {
        isActive: true,
        randomNumber: 0
      }
    },
    // Need to redo functions to work more like vue [Jennie]
    methods: {
      onClick() {
        this.isActive = !this.isActive
        console.log(this.isActive)
      },
      clickText() {
        this.randomNumber = Math.floor(
          Math.random() * this.$store.state.quizQuestions.length
        )
        var popup = document.getElementById('myPopup')
        popup.classList.toggle('show')
      }
    },
    computed: {
      tipOfTheDay() {
        return this.$store.state.quizQuestions[this.randomNumber].tip
      }
    }
  }
</script>

<style>
  /* Popup coding is fetched from:
  https://www.w3schools.com/howto/howto_js_popup.asp
  and modified.*/

  #tipbot {
    position: absolute;
    width: 60px;
    bottom: 0;
    right: 0;
  }

  /* Popup container */
  .popup {
    width: 100%;
    height: 100%;
    display: inline-block;
    cursor: pointer;
  }

  /* The actual popup (appears on top) */
  .popup .popuptext {
    visibility: hidden;
    width: 160px;
    background-color: rgb(117, 250, 141);
    color: rgb(6, 0, 0);
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    margin: 10px;
    position: absolute;
    z-index: 1;
    bottom: 50px;
    right: 0;
  }

  /* Popup arrow */
  .popup .popuptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 80%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgb(117, 250, 141) transparent transparent transparent;
  }

  /* Toggle this class when clicking on the popup container (hide and show the popup) */
  .popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }

  /* Add animation (fade in the popup) */
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

<template>
  <div class="popup">
    <span class="popuptext" id="myPopup">
      <p>Did you know that...</p>
      <p>{{ tipOfTheDay }}</p>
    </span>
    <img
      id="tipbot"
      src="../../assets/earthly.svg"
      alt="toon"
      @click="clickText"
    />
  </div>
</template>
