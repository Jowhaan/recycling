<script>
  export default {
    data() {
      return {
        menuPosition: 'hide'
      }
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

  <span :class="menuPosition" id="sidebar" style="display: flex">
    <div class="list-group">
      <RouterLink to="/" class="list-group-item list-group-item-action"
        >Home
      </RouterLink>
      <RouterLink to="/quiz" class="list-group-item list-group-item-action"
        >Quiz
      </RouterLink>
    </div>

    <i
      @click="hideMenu"
      class="bi bi-x-lg"
      id="closeIcon"
      style="
        font-size: 1rem;
        color: white;
        padding: 0.5rem;
        position: absolute;
        right: 00.5rem;
      "
    />
  </span>

  <!-- <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/quiz">Quiz</RouterLink>
        </li>
      </ul>
    </nav> -->

  <!-- <div class="list-group">
      <a
        href="#"
        class="list-group-item list-group-item-action active"
        aria-current=""
        true
      >
        The current link item
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        A second link item
      </a>
    </div> -->
</template>

<style scoped>
  #sidebar {
    background-color: black;
    color: white;
    position: absolute;
    left: -300px;
    bottom: 0px;
    top: 0px;
    width: 200px;
    transition-property: left;
    transition-duration: 0.5;
    transition-timing-function: ease-out;
  }
  #sidebar.show {
    left: 0px;
  }
  #sidebar.hide {
    left: -300px;
  }
</style>
