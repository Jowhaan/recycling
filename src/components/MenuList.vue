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
  <i @click="showMenu" class="bi bi-list" />
  <div :class="backgroundFade" id="secondBackground" />
  <div :class="menuPosition" id="sidebar">
    <div id="menubar">
      <div id="side-navbar">
        <div @click="hideMenu" class="list-group">
          <NavList />
        </div>
      </div>
      <i @click="hideMenu" class="bi bi-x" id="closeIcon" />
    </div>
    <div @click="hideMenu" id="clickSurface" />
  </div>
</template>

<style lang="scss" scoped>
  #sidebar {
    display: flex;
    position: absolute;
    z-index: 100;
    left: -100vw;
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
  #secondBackground {
    display: flex;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 100;
    transition-property: all;
    transition-timing-function: ease-in-out;
  }

  #secondBackground.hide {
    visibility: hidden;
    opacity: 0;
    transition-duration: 0.5s;
  }

  #secondBackground.show {
    background-color: var(--bs-search-icon-color);
    visibility: visible;
    opacity: 0.7;
    transition-duration: 0.5s;
  }
  #menubar {
    display: flex;
    border-radius: 0px 20px 20px 0px;
    background-color: var(--bs-primary-background);
  }
  #side-navbar {
    width: 70vw;
    height: 97vh;
  }
  #clickSurface {
    width: 30vw;
  }

  #closeIcon {
    font-size: 32px;
    margin-top: 20px;
    margin-right: 20px;
    &:hover {
      color: var(--bs-primary);
    }
  }
</style>
