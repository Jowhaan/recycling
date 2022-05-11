<script>
  export default {}
</script>

<style>
  .flexbox-container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
  }
  .flexbox-item-1 {
    font-style: Italic;
    font-weight: bold;
    font-size: 25px;
    padding-bottom: 20px;
    padding-top: 150px;
    flex-grow: 1;
    align-items: center;
  }
  .flexbox-item-input {
    border: 3px solid black;
    height: 20px;
    border-radius: 25px;
    flex-grow: 1;
    align-items: center;
  }
</style>

<template>
  <body>
    <div class="flexbox-container">
      <div class="flexbox-item-1">What do you want to recycle?</div>
      <input
        class="flexbox-item-input"
        type="text"
        placeholder="Ex. toothbrush, playstation..."
        aria-label="Search"
      />
      <button class="bi bi-search" />
    </div>
  </body>
</template>
