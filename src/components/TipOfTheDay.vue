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

<style>
  .card {
    height: 35rem;
    width: 20rem;
    margin: auto;
  }

  #cardImage {
    margin-top: 25px;
    height: 220px;
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
        <div class="card border border-5 border-white rounded">
          <i class="bi bi-share position-absolute top-0 end-0" />
          <div id="cardImage">
            <!-- <img :src="pic" class="d-block w-100" alt="..." /> -->
            <img
              src="../../assets/roundEarthly.svg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="card-body">
            <p class="card-title"><b>Did you know that:</b></p>
            <p class="card-text">
              {{ card.tip }}
            </p>
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
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
