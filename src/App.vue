<script>
  export default {
    components: {}
  }
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<!-- USE SASS
  to be able to change Bootstrap defaults and be able to make styles into variables.

   --IF WE WANT SASS GLOBAL IN ENTIRE PROJECT:
      Add sass style in App.vue:

      <style lang="scss"></style>

   --IF WE WANT SASS FOR A SPECIFIC COMPONENT:
      Add scoped sass style in the component
      Example:

      <style lang="scss" scoped>
        $some-variable: bold;

      p {
        font-weight: $some-variable;
      }
      </style>

      <template>
        <p>Hello</p>
      </template>

 -->

<!-- USE BOOTSTRAP -EXAMPLE-

      <input
        class="btn btn-primary"
        type="button"
        value="Click here"
      />

  -->
