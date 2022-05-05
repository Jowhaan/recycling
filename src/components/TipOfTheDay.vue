<script>
  export default {
    data() {
      return {}
    },
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

<style></style>

<template>
  <h1>Tip of the day</h1>
  <img
    src="../../assets/Recycling centres/Garden waste/garden-waste.ai"
    alt=""
  />
  <div
    id="carouselExampleControlsNoTouching"
    class="carousel slide"
    data-bs-touch="false"
    data-bs-interval="false"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../assets/Recycling centres/Garden waste/garden-waste.ai"
          class="d-block w-100"
          alt="garden waste sign"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/Recycling centres/Garden waste/twigs-branches.ai"
          class="d-block w-100"
          alt="twigs and branches sign"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/Recycling centres/Garden waste/invasive.ai"
          class="d-block w-100"
          alt="invasive speices sign"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
