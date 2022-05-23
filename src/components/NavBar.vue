<script>
  import MenuList from './MenuList.vue'

  export default {
    data() {
      return {}
    },
    components: { MenuList },
    methods: {
      goToLog() {
        this.$router.push('/user')
      },
      logout() {
        this.$store.commit('logout')
        this.$router.push('/')
      }
    }
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
    <div v-if="this.$store.state.loggedIn">
      <button class="btnlog" @click="logout()">Logout</button>
    </div>
    <div v-else><button class="btnlog" @click="goToLog()">Login</button></div>
  </nav>
</template>

<style>
  .btnlog {
    border-radius: 5px;
    border-color: #0b604d;
    margin-right: 15px;
    text-align: center;
    font-size: 15px;
    font-style: bold;
  }
  .btnlog:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
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
