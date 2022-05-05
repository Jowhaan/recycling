<script>
  import { mdbIcon } from 'mdb-vue-ui-kit'
  export default {
    components: {
      mdbIcon
    }
    /* eventuell kod till array
    computed: {
      filterProjects: function () {
        return this.projects.filter((project) => {
          return project.projectName
            .toLowerCase()
            .match(this.search.toLowerCase())
        })
      }
    }*/
  }
</script>

<style>
  .flexbox-container {
    display: flex;
    justify-content: space-around;
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
  }
  .input-group.md-form.form-sm.form-2 input.lime-border {
    border: 3px solid black;
    min-width: 300px;
    height: 40px;
    border-radius: 25px;
    max-width: 300px; /* Original width of the logo image */
    flex-grow: 1;
  }

  body {
    background-color: rgb(54, 144, 36);
  }
</style>

<template>
  <body>
    <div class="flexbox-container">
      <div class="flexbox-item-1">What do you want to recycle?</div>
      <div class="input-group md-form form-sm form-2 pl-0">
        <input
          class="form-control my-0 py-1 lime-border"
          type="text"
          placeholder="Ex. toothbrush, playstation..."
          aria-label="Search"
        />
        <div class="input-group-append">
          <span class="input-group-text lime lighten-2" id="basic-text1">
            <mdbIcon icon="search" />
          </span>
        </div>
      </div>
    </div>
  </body>
</template>
