<script>
  export default {
    data() {
      return {
        searchText: 0
      }
    },
    methods: {
      getResult() {
        let result = ''
        for (let i = 0; i < this.$store.state.trash.length; i++) {
          if (this.$store.state.trash[i].engName.includes(this.searchText)) {
            result += this.$store.state.trash[i]
          }
        }
        return result
      }
    }
  }
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
    font-size: 20px;
    width: 80%;
    padding-bottom: 20px;
    padding-top: 150px;
    flex-grow: 1;
    text-align: center;
  }
  .flexbox-item-input {
    border: 3px solid rgb(78, 211, 21);
    height: 50px;
    width: 70%;
    max-width: 450px;
    border-radius: 25px;
    flex-grow: 1;
    align-items: center;
  }

  body {
    background-color: rgb(249, 249, 249);
  }

  ::placeholder {
    padding-left: 5px;
    color: black;
  }
</style>

<template>
  <body>
    <div class="flexbox-container">
      <div class="flexbox-item-1">What do you want to recycle?</div>

      <input
        class="flexbox-item-input"
        v-model="searchText"
        type="text"
        placeholder="Ex. toothbrush, playstation..."
        aria-label="Search"
      />
      <i class="bi bi-search" type="button" @onClick="getResult" />
      <div class="listgroup">hej</div>
    </div>
  </body>
</template>
