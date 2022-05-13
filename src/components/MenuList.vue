<script>
  import NavList from './NavList.vue'
  export default {
    data() {
      return {
        menuPosition: 'hide',
        backgroundFade: 'hide'
      }
    },
    components: {
      NavList
    },
    methods: {
      showMenu() {
        this.menuPosition = 'show'
        this.backgroundFade = 'show'
      },
      hideMenu() {
        this.menuPosition = 'hide'
        this.backgroundFade = 'hide'
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
  <div :class="backgroundFade" id="secondBackground" />
  <div :class="menuPosition" id="sidebar" style="display: flex">
    <div id="menubar" style="display: flex; border-radius: 0px 0px 25px 0px">
      <div id="navbar" style="width: 40vw">
        <div @click="hideMenu" class="list-group">
          <NavList />
        </div>
      </div>
      <i @click="hideMenu" class="bi bi-x-lg" id="closeIcon" />
    </div>

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
    transition-timing-function: ease-out;
  }
  #sidebar.show {
    left: 0vw;
    transition-property: left;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  #sidebar.hide {
    left: -100vw;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
  }

  #navbar {
    width: 40vw;
  }

  #closeIcon {
    opacity: 0.5;
    position: relative;
    left: -10px;
    font-size: 1rem;
    padding: 0.5rem;
    &:hover {
      color: white;
    }
  }
</style>
