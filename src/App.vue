<script>
  import SearchView from './views/SearchView.vue'
  export default {
    components: { SearchView }
  }
</script>

<template>
  <main>
    <SearchView />
    <RouterView />
  </main>
</template>
