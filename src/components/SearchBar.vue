<script>
  /* import SearchResult from './SearchResult.vue' */

  export default {
    /* components: {
      SearchResult
    }, */
    data() {
      return {
        searchQuery: '',
        searchResult: []
      }
    },
    methods: {
      search() {
        console.log('Clicked searchbutton')
        this.searchResult = []
        for (let i = 0; i < this.$store.state.trash.length; i++) {
          if (this.searchQuery === this.$store.state.trash[i].engName) {
            this.searchResult.push(this.$store.state.trash[i])
            //console.log(this.searchResult)
            //Kopiera denna för att göra den sökbar genom svenska ord också
          }
        }
      }
    }
  }
</script>

<style>
  #trashSign {
    height: 150px;
  }

  #searchResult {
    text-align: center;
    padding: 10px;
  }

  .flexbox-container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
  }
  .flexbox-item-1 {
    flex-grow: 1;
    align-items: center;
  }
  .flexbox-item-input {
    border: 3px solid black;
    height: 30px;
    border-radius: 25px;
    flex-grow: 1;
    align-items: center;
  }
</style>

<template>
  <div class="flexbox-container">
    <h1 class="flexbox-item-1">What do you want to recycle?</h1>
    <input
      class="flexbox-item-input"
      type="text"
      v-model="searchQuery"
      placeholder="Ex. toothbrush, playstation..."
      aria-label="Search"
    />
    <button class="bi bi-search" @click="search" />
  </div>
  <!-- Search result -->
  <!-- <div>{{ searchQuery }}</div> -->
  <div id="searchResult" v-for="trash in searchResult" :key="trash.id">
    <h2>{{ trash.engName }}</h2>
    <img
      id="trashSign"
      :src="'../../assets/RecyclingSigns/' + trash.sign + '.svg'"
      alt="{{ trash.sign }}"
    />
    <!-- <p>Sort as: {{ trash.sortAs }}</p> -->
    <p>Return at a {{ trash.returnAt }}</p>
    <!-- <p>How will it be recycled? {{ trash.whatHappens }}</p> -->
  </div>
  <!-- En template för ikonerna med olika återvinningsbilder och en för själva sökresultatet. Så länge searchQuery === "" / null / undefined så visas den ena, sen hoppar den över till din andra
  <SearchResult :search-query="searchQuery" /> -->
</template>
