<script>
  import * as bootstrap from 'bootstrap'

  export default {
    mounted() {
      var myCarousel = document.querySelector('#carouselExampleControls')
      var carousel = new bootstrap.Carousel(myCarousel)
      console.log(carousel)
    },
    data() {
      return {}
    },
    methods: {},
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

<style></style>

<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div
          class="card border border-5 border-white rounded"
          style="width: 18rem"
        >
          <img src="{{ pic }}" class="d-block w-100" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Did you know that...</h5>
            <p class="card-text">
              {{ tip }}
            </p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div
          class="card border border-5 border-white rounded"
          style="width: 18rem"
        >
          <img
            src="../../assets/RecyclingSigns/batteries.svg"
            class="d-block w-100"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div
          class="card border border-5 border-white rounded"
          style="width: 18rem"
        >
          <img
            src="../../assets/RecyclingSigns/batteries.svg"
            class="d-block w-100"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
