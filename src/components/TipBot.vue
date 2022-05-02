<script>
  export default {
    methods: {
      onClick() {}
    }
  }
</script>

<style>
  .popup {
    display: none;
    position: fixed;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }

  popup.visible {
    display: block;
  }
</style>

<template>
  <p>Testsida för Dagens Tips</p>
  <div class="popup">Todays Tips!</div>
</template>
