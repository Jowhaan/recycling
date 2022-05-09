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
    style="font-size: 2rem; color: black"
  />

  <div :class="menuPosition" id="sidebar" style="display: flex">
    <div style="width: 40vw; background-color: black">
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
    color: white;
    position: absolute;
    z-index: 100;
    left: -100vw;
    bottom: 0px;
    top: 0px;
    width: 100vw;
    transition-property: left;
    transition-duration: 0.5;
    transition-timing-function: ease-out;
  }
  #sidebar.show {
    left: 0px;
  }
  #sidebar.hide {
    left: -100vw;
  }
  #closeIcon {
    background-color: black;
    font-size: 1rem;
    color: gray;
    padding: 0.5rem;
    &:hover {
      color: white;
    }
  }
</style>
