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
        hiddenTipBot: null
      }
    }
  }
</script>

<template><SearchBar /> <TipBot /></template>
