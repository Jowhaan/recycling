<script>
  import MenuList from './components/MenuList.vue'
  export default {
    components: { MenuList }
  }
</script>

<template>
  <MenuList />
  <main>
    <RouterView />
  </main>
</template>

<!-- SASS för att kunna ändra Bootstrapelement samt kunna göra
färger och andra stilsättningsinställningar till VARIABLER -->

<!-- OM VI VILL HA SASS FÖR HELA PROJEKTET:
Lägg det här i App.vue

<style lang="scss"></style>
-->

<!-- OM VI VILL HA SASS FÖR ETT SPECIFIKT ELEMENT:
Lägg in scoped style i elementet t.ex. så här:

<style lang="scss" scoped>
  $some-variable: bold;

  p {
    font-weight: $some-variable;
  }
</style>

<template>
  <p>Hejsan</p>
</template>

 -->
