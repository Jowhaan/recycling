<script>
  export default {
    created() {
      this.getAllImagePaths()
    },
    data() {
      return {
        searchQuery: '',
        searchHit: false,
        allImagePaths: [],
        specificImagePaths: [],
        containsSpecific: false,
        currentSign: [],
        signClicked: false,
        signClickedPath: '',
        currentHitPath: '',
        currentPath: '',
        currentTrashObject: null
      }
    },
    watch: {
      searchQuery() {
        this.searchHit = false
        this.getSpecificImagePaths()
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
    methods: {
      getSpecificImagePaths() {
        this.containsSpecific = false
        this.specificImagePaths = []
        this.$store.state.trash.filter((result) => {
          if (result.engName.startsWith(this.searchQuery)) {
            this.specificImagePaths.push(result.sign)
            this.containsSpecific = true
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
      }
    }
  }
</script>

<style scoped>
  .trashSign {
    height: 150px;
  }

  #searchResult {
    text-align: center;
    padding: 10px;
  }

  img {
    border-radius: 0;
  }
  .flexbox-container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
  }
  .flexbox-item-1 {
    flex-grow: 1;
    align-items: center;
    text-align: center;
  }
  .flexbox-item-input {
    border: 3px solid #0b604d;
    height: 30px;
    width: 70%;
    border-radius: 80px;
    flex-grow: 1;
    align-items: center;
  }
</style>

<template>
  <div class="flexbox-container">
    <h1 class="flexbox-item-1">What do you want to recycle?</h1>
    <input
      @focus="isFocused"
      class="flexbox-item-input form-control"
      list="datalistOptions"
      type="text"
      v-model="searchQuery"
      placeholder="Ex. toothbrush, playstation..."
      aria-label="Search"
    />
    <datalist id="datalistOptions">
      <option value="Detta är statiska värden" />
      <option value="Som ska ersättas med en 'v-for'" />
      <option value="Som ska leda till en array" />
      <option value="Som ska innehålla matchande ord på" />
      <option value="Det man har börjat söka på" />
      <option value="Som jag kanske redan har någonstans" />
      <option value="I min kod men jag har gjort tillräckligt" />
      <option value="För idag, så nu tar vi helg" />
      <option value="Sen ska listan bli dynamisk" />
    </datalist>
    <div v-if="searchHit && !signClicked">
      <img
        class="trashSign"
        :src="'../../assets/RecyclingSigns/' + this.currentHitPath + '.svg'"
      />
      <h3>You recycle your {{ this.searchQuery }} here</h3>
      <p>{{ this.currentTrashObject.whatHappens }}</p>
    </div>
    <div v-if="searchQuery && !containsSpecific && !searchHit && !signClicked">
      <h3>Categories:</h3>
      <div
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
      </div>
    </div>
    <div v-if="signClicked">
      <img
        class="trashSign"
        :src="'../../assets/RecyclingSigns/' + this.signClickedPath + '.svg'"
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
    <div v-if="searchQuery && containsSpecific && !signClicked">
      <h3>Categories:</h3>
      <div
        :key="this.specificImagePaths[index]"
        class="image-items"
        v-for="(imagePath, index) in specificImagePaths"
      >
        <img
          class="trashSign"
          :src="'../../assets/RecyclingSigns/' + imagePath + '.svg'"
          :alt="imagePath"
          @click="onSignClick(imagePath)"
        />
      </div>
    </div>
  </div>
</template>
