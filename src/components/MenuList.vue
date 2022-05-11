<script>
  import NavList from './NavList.vue'
  export default {
    data() {
      return {
        menuPosition: 'hide'
      }
    },
    components: {
      NavList
    },
    methods: {
      showMenu() {
        this.menuPosition = 'show'
      },
      hideMenu() {
        this.menuPosition = 'hide'
      }
    }
  }
</script>

<template>
  <i
    @click="showMenu"
    class="bi bi-list"
    id="hamburgerIcon"
    style="font-size: 2rem"
  />

  <div :class="menuPosition" id="sidebar" style="display: flex">
    <div
      id="navbar"
      style="
        width: 40vw;
        background-color: black;
        border-radius: 0px 0px 25px 0px;
      "
    >
      <div @click="hideMenu" class="list-group">
        <NavList />
      </div>
    </div>
    <i @click="hideMenu" class="bi bi-x-lg" id="closeIcon" />

    <div @click="hideMenu" style="width: 60vw" />
  </div>
</template>

<style lang="scss" scoped>
  #sidebar {
    position: absolute;
    z-index: 100;
    left: -100vw;
    bottom: 50px;
    top: 0px;
    width: 100vw;
    transition-property: left;
    transition-duration: 0.5;
    transition-timing-function: ease-out;
  }
  #navbar {
    width: 40vw;
  }
  #sidebar.show {
    left: 0px;
  }
  #sidebar.hide {
    left: -100vw;
  }
  #closeIcon {
    opacity: 0.5;
    position: relative;
    left: -40px;
    font-size: 1rem;
    padding: 0.5rem;
    &:hover {
      color: white;
    }
  }
</style>
