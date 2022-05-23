<script>
  import * as bootstrap from 'bootstrap'

  export default {
    mounted() {
      var myCarousel = document.querySelector('#myCarousel')
      var carousel = new bootstrap.Carousel(myCarousel)
      carousel.to(this.$route.params)
    },
    data() {
      return {}
    },
    computed: {
      tip() {
        return this.$store.state.quizQuestions[0].tip
      },
      pic() {
        return (
          '../../assets/tipPics/' + this.$store.state.quizQuestions[0].tipPic
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  #rootcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin: 30px;
    height: 80vh;
  }

  #cardcontainer {
    display: flex;
    flex-direction: column;
    height: 70vh;
    width: 70vw;
    background-color: rgba(98, 193, 175, 0.18);
    border-radius: 20px 20px 0px 0px;
    box-shadow: 5px 5px 30px rgba(0, 0, 30, 0.5);
  }

  #cardImage {
    display: flex;
    padding: 20px 40px 0px 40px;
    flex-grow: 1;
    margin: auto;
  }

  #tipcontainer {
    display: flex;
    flex-direction: column;
    padding: 30px;
    flex-grow: 10;
    background-color: var(--bs-earth-branch);
    border-radius: 20px 20px 0px 0px;
  }
  h3 {
    color: white;
    font-size: 16px;
    line-height: 20px;
  }
  p {
    color: white;
    line-height: 24px;
  }

  i {
    font-size: 38px;
    &:hover {
      color: var(--bs-earth-branch);
    }
    color: rgba(0, 0, 0, 0.46);
  }
</style>

<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(card, index) in this.$store.state.quizQuestions"
        :key="card.id"
        class="carousel-item"
        :class="{ active: index - 1 == $route.params.tipNum }"
      >
        <div id="rootcontainer">
          <div id="cardcontainer">
            <img
              id="cardImage"
              src="../../assets/roundEarthly.svg"
              class="d-block w-100"
              alt="..."
            />
            <div id="tipcontainer">
              <h3>Did you know that:</h3>
              <p class="card-text">
                {{ card.tip }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <i class="bi bi-arrow-left-circle-fill" />
      <span class="visually-hidden">Previous</span>
    </button>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <i class="bi bi-arrow-right-circle-fill" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<!-- Code for having different pics for each tip
<img :src="pic" class="d-block w-100" alt="..." />
-->
