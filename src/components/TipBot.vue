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
    // Get's random number at start but never changes unless page is reloaded [Jennie]
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

  /* Popup container */
  .popup {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  img {
    align-items: flex-end;
    align-self: flex-end;
    width: 60px;
  }

  /* The actual popup (appears on top) */
  .popup .popuptext {
    visibility: hidden;
    width: 200px;
    height: 150px;
    background-color: rgb(155, 236, 241);
    color: rgb(2, 14, 80);
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    margin: 8px;
    align-items: flex-end;
    align-self: flex-end;
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
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta et pariatur
    doloremque deserunt? Obcaecati vel ut ea repudiandae doloribus error
    repellendus incidunt, labore accusantium. Quidem voluptate architecto libero
    harum natus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
    cum nisi voluptatibus nobis soluta? Aspernatur doloremque obcaecati
    laboriosam accusantium labore praesentium officia provident, explicabo
    tenetur expedita. Ipsum ullam aspernatur quam!
  </p>
  <div class="popup">
    <span class="popuptext" id="myPopup">
      <p>Did you know that...</p>
      <p>{{ tipOfTheDay }}</p>
    </span>
    <img src="../../assets/cartoon.png" alt="toon" @click="clickText" />
    <!-- <button @click="clickText">Click me!</button> -->
  </div>
</template>
