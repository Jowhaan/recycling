<script>
  export default {}
</script>

<template>
  <span style="display: flex; direction: column">
    <span id="userLink" v-if="this.$store.state.loggedIn">
      <img
        src="this.$store.state.currentUser.profilePic"
        alt="profile picture"
      />
      <p>{{ this.$store.state.currentUser.userName }}</p>
    </span>

    <span id="menuIcons">
      <img src="../../assets/MenuIcons/tips-icon.svg" />
      <img src="../../assets/MenuIcons/quiz-icon.svg" />
      <img src="../../assets/MenuIcons/sorting-icon.svg" />
    </span>

    <span id="menuLinks">
      <RouterLink to="/tip" class="list-group-item list-group-item-action">
        Tips</RouterLink
      >
      <RouterLink to="/quiz" class="list-group-item list-group-item-action"
        >Quiz
      </RouterLink>
      <RouterLink
        to="/"
        class="list-group-item list-group-item-action"
        id="link"
        >Sorting
      </RouterLink>
    </span>
  </span>
</template>

<style lang="scss" scoped>
  img {
    border-radius: 0%;
    width: 24px;
    height: 24px;
  }
  #menuIcons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 80px;
    padding-left: 25px;
  }
  #menuLinks {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 80px;
  }
</style>
