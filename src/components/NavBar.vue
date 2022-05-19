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
  <nav class="navbar">
    <MenuList />
    <a href="/">
      <img
        src="../../assets/EarthlyIcon.svg"
        alt=""
        width="150"
        height="70"
        class="image"
      />
    </a>
    <a href="/user">
      <button class="btnlog" type="submit">Log in</button>
    </a>
  </nav>
</template>

<style>
  .btnlog {
    border-radius: 1rem;
    border-color: #0b604d;
    margin-right: 15px;
    text-align: center;
    font-size: 15px;
  }
  .flexbox-container2 {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 15px;
  }

  .image {
    align-items: center;
    padding-left: 10px;
    margin-left: 15px;
  }
</style>
