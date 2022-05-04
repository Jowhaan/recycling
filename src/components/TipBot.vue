<script>
  export default {
    data() {
      return {
        isActive: true
      }
    },
    // Need to redo functions to work more like vue [Jennie]
    methods: {
      onClick() {
        this.isActive = !this.isActive
        console.log(this.isActive)
      },
      clickText() {
        var popup = document.getElementById('myPopup')
        popup.classList.toggle('show')
      }
    },
    // Get's random number at start but never changes unless page is reloaded [Jennie]
    computed: {
      tipOfTheDay() {
        let tipNumber = Math.floor(
          Math.random() * this.$store.state.quizQuestions.length
        )
        return this.$store.state.quizQuestions[tipNumber].tip
      }
    }
  }
</script>

<style>
  /* Popup coding is fetched from:
  https://www.w3schools.com/howto/howto_js_popup.asp
  and modified.*/

  /* Popup container */
  .popup {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* The actual popup (appears on top) */
  .popup .popuptext {
    visibility: hidden;
    width: 250px;
    height: 250px;
    background-color: rgb(155, 236, 241);
    color: rgb(2, 14, 80);
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 3%;
    right: 3%;
  }

  /* Popup arrow */
  .popup .popuptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgb(155, 236, 241) transparent transparent transparent;
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
    <div class="popuptext" id="myPopup">
      <p>Did you know that...</p>
      <p>{{ tipOfTheDay }}</p>
    </div>
  </div>
  <button @click="clickText">Click me!</button>
</template>
