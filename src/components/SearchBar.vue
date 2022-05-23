<script>
  export default {
    created() {
      this.getAllImagePaths()
    },
    data() {
      return {
        searchQuery: '', //input fältet
        searchHit: false, //om input fält matchar engName i trash
        allImagePaths: [], //alla ikoner vi har som är kopplat till store.trash
        specificImagePaths: [], //filtreras mot input fältet och läggs här
        containsSpecific: false, //om vi har träffar mot filtreringen ovan
        currentSign: [], //array med trash.engName som tillhör klickad skylt
        signClicked: false, //om man klickat på en skylt
        signClickedPath: '', //klickad skylts sökväg
        currentHitPath: '', //skylten tillhörande match från sökfält
        currentPath: '', //används för att ta ner alla sökvägar till skyltar
        currentTrashObject: null, //hela trash objektet för en searchQuery träff
        dataListOptions: [], //matchade strängar för "autocompletern"
        inputFocus: false
      }
    },
    watch: {
      searchQuery() {
        this.searchHit = false
        this.getSpecificImagePaths()
        this.getDataListOptions()
        this.signClicked = false
        this.currentTrashObject = null
        this.$store.state.trash.filter((result) => {
          if (this.searchQuery === result.engName) {
            this.searchHit = true
            this.currentHitPath = result.sign
            this.currentTrashObject = result
          }
        })
      }
    },
    computed: {
      showEntireSignList() {
        if (
          (this.inputFocus || this.searchQuery) &&
          !this.containsSpecific &&
          !this.searchHit &&
          !this.signClicked
        ) {
          return true
        } else {
          return false
        }
      },
      showSpecificSignList() {
        if (
          this.searchQuery &&
          this.containsSpecific &&
          !this.signClicked &&
          !this.searchHit
        ) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      getSpecificImagePaths() {
        this.containsSpecific = false
        this.specificImagePaths = []
        this.$store.state.trash.filter((result) => {
          if (
            this.searchQuery !== '' &&
            result.engName.startsWith(this.searchQuery)
          ) {
            this.containsSpecific = true
            var conflict = false
            var currentSign = result.sign
            for (var i = 0; i < this.specificImagePaths.length; i++) {
              if (this.specificImagePaths[i] === currentSign) {
                conflict = true
              }
            }
            if (!conflict) {
              this.specificImagePaths.push(result.sign)
            }
          }
        })
      },
      getAllImagePaths() {
        for (var i = 0; i < this.$store.state.trash.length; i++) {
          var currentPath = this.$store.state.trash[i].sign
          var conflict = false

          for (var j = 0; j < this.allImagePaths.length; j++) {
            if (this.allImagePaths[j] === currentPath) {
              conflict = true
            }
          }
          if (!conflict) {
            this.allImagePaths.push(currentPath)
          }
        }
      },
      onBlur() {
        setTimeout(() => {
          this.inputFocus = false
        }, 1000)
      },
      onFocus() {
        this.inputFocus = true
        this.$emit('hide-globe')
      },
      onSignClick(imagePath) {
        this.currentSign = []
        this.searchBarFocused = false
        this.signClicked = true
        this.signClickedPath = imagePath
        var test = this.$store.state.trash.filter(
          (result) => imagePath === result.sign
        )
        for (var i = 0; i < test.length; i++) {
          this.currentSign.push(test[i].engName)
        }
      },
      getDataListOptions() {
        this.dataListOptions = []
        this.$store.state.trash.filter((result) => {
          if (this.searchQuery !== '') {
            if (result.engName.startsWith(this.searchQuery)) {
              this.dataListOptions.push(result.engName)
            }
          }
        })
      }
    },
    emits: ['hide-globe']
  }
</script>

<style lang="scss" scoped>
  .trashSign {
    height: 80px;
  }
  #searchResult {
    text-align: center;
    padding: 10px;
  }
  img {
    border-radius: 10px;
    padding: 5px;
  }
  .flexbox-container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    margin-top: 2rem;
    margin-left: 15px;
    margin-right: 15px;
  }
  .image-items {
    padding-top: 1rem;
  }
  .flexbox-item-1 {
    flex-grow: 1;
    align-items: center;
    text-align: center;
  }
  .flexbox-item-input {
    border: 3px solid var(--bs-search-icon-color);
    height: 30px;
    width: 70%;
    border-radius: 80px;
    flex-grow: 1;
    align-items: center;
    margin-top: 20px;
  }
  #categories {
    padding-top: 40px;
  }
  h3 {
    font-size: 16px;
    line-height: 20px;
  }
</style>

<template>
  <div class="flexbox-container">
    <h1 class="flexbox-item-1">What do you want to recycle?</h1>
    <input
      class="flexbox-item-input form-control"
      list="datalistOptions"
      type="text"
      v-model="searchQuery"
      placeholder="Ex. glue, computer..."
      aria-label="Search"
      @focus="onFocus"
      @blur="onBlur"
    />
    <datalist v-if="!searchHit" id="datalistOptions">
      <option
        :key="this.dataListOptions[index]"
        v-for="(name, index) in dataListOptions"
        :value="name"
      />
    </datalist>
    <div class="flexbox-container" v-if="searchHit && !signClicked">
      <h3>You recycle your {{ this.searchQuery }} at a:</h3>
      <h2>{{ this.currentTrashObject.returnAt }}</h2>
      <img
        style="height: 150px"
        class="trashSign"
        :src="'../../assets/RecyclingSigns/' + this.currentHitPath + '.svg'"
      />
      <p>What happens when i recycle?</p>
      <p style="">{{ this.currentTrashObject.whatHappens }}</p>
    </div>
    <div style="margin-left: 20px" v-if="showEntireSignList">
      <h3 id="categories">Categories:</h3>
      <span
        :key="this.allImagePaths[index]"
        class="image-items"
        v-for="(imagePath, index) in allImagePaths"
      >
        <img
          class="trashSign"
          :src="'../../assets/RecyclingSigns/' + imagePath + '.svg'"
          :alt="imagePath"
          @click="onSignClick(imagePath)"
        />
      </span>
    </div>
    <div v-if="signClicked">
      <img
        style="height: 150px"
        class="trashSign"
        :src="'../../assets/RecyclingSigns/' + this.signClickedPath + '.svg'"
        :alt="signClickedPath"
      />
      <p>Here you throw away:</p>
      <ul>
        <li
          :key="this.currentSign[index]"
          v-for="(trashName, index) in currentSign"
        >
          {{ trashName }}
        </li>
      </ul>
    </div>
    <div v-if="showSpecificSignList">
      <h3 style="padding-top: 40px">Categories:</h3>
      <span
        :key="this.specificImagePaths[index]"
        class="image-items"
        v-for="(imagePath, index) in specificImagePaths"
      >
        <img
          style="height: 150px"
          class="trashSign"
          :src="'../../assets/RecyclingSigns/' + imagePath + '.svg'"
          :alt="imagePath"
          @click="onSignClick(imagePath)"
        />
      </span>
    </div>
  </div>
</template>
