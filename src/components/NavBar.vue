<script>
  import MenuList from './MenuList.vue'
  export default {
    data() {
      return {}
    },
    components: { MenuList },
    methods: {}
  }
</script>

<template>
  <div class="flexbox-container2">
    <nav class="navbar">
      <MenuList />

      <img
        src="../../assets/EarthlyIcon.svg"
        alt=""
        width="130"
        height="70"
        class="image"
      />
      <button class="btnlog" type="submit">Log in</button>
    </nav>
  </div>
</template>

<style>
  .btnlog {
  }
  flexbox-container2 {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    background-color: red;
  }

  .image {
    align-items: flex-end;
  }
</style>
