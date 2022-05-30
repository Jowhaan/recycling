<script>
  export default {}
</script>

<style lang="scss" scoped>
  #rootBox {
    display: flex;
    flex-direction: column;
  }
  img {
    border-radius: 0%;
    width: 24px;
    height: 24px;
  }

  h3 {
    margin-left: 25px;
  }

  #userLink {
    display: flex;
    padding-left: 20px;
    height: 50px;
    margin-top: 100px;
    align-items: center;
  }
  #profilePic {
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }
  #linkList {
    display: flex;
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

<template>
  <div id="rootBox">
    <RouterLink to="/user" class="list-group-item list-group-item-action">
      <span id="userLink" v-if="this.$store.state.loggedIn">
        <img
          id="profilePic"
          :src="this.$store.state.currentUser.profilePic"
          alt="Profile picture"
        />
        <h3>{{ this.$store.state.currentUser.userName }}</h3>
      </span>
    </RouterLink>

    <span style="display: flex; direction: column">
      <span id="linkList">
        <span id="menuIcons">
          <img src="../../assets/MenuIcons/tips-icon.svg" alt="Star" />
          <img src="../../assets/MenuIcons/quiz-icon.svg" alt="Trophy" />
          <img
            src="../../assets/MenuIcons/sorting-icon.svg"
            alt="Recycling symbol"
          />
        </span>

        <span id="menuLinks">
          <RouterLink to="/tip" class="list-group-item list-group-item-action">
            Tips</RouterLink
          >
          <RouterLink to="/quiz" class="list-group-item list-group-item-action"
            >Quiz
          </RouterLink>
          <RouterLink to="/" class="list-group-item list-group-item-action"
            >Sorting
          </RouterLink>
        </span>
      </span>
    </span>
  </div>
</template>
