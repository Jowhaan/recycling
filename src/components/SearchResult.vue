<script>
  export default {
    data() {
      return {
        searchResult: []
      }
    },
    props: {
      searchQuery: {
        type: String,
        default: ''
      }
    },
    watch: {
      searchQuery(newName, oldName) {
        console.log(`Namnet har ändrats från ${oldName} till ${newName}`)
      }
    },
    methods: {
      search() {
        console.log('recieved information')
        console.log(this.searchQuery)
        for (let i = 0; i < this.$store.state.trash.length; i++) {
          if (this.searchQuery === this.$store.state.trash[i].engName) {
            this.searchResult.push(this.$store.state.trash[i])
            //console.log(this.searchResult)
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
  }
</style>

<template>
  <!-- Search result -->
  <!-- En template för ikonerna med olika återvinningsbilder och en för själva sökresultatet. Så länge searchQuery === "" / null / undefined så visas den ena, sen hoppar den över till din andra -->
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
</template>
