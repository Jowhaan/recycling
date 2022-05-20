<script>
  import SearchBar from '../components/SearchBar.vue'
  import TipBot from '../components/TipBot.vue'

  export default {
    components: {
      SearchBar,
      TipBot
    },
    data() {
      return {
        amIHidden: false
      }
    },
    methods: {
      onHideGlobe() {
        this.amIHidden = true
      }
    }
  }
</script>

<template>
  <SearchBar @hide-globe="onHideGlobe" /> <TipBot :am-i-hidden="amIHidden" />
</template>
