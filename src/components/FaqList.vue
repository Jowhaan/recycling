<template>
  <div>
    <h1 class="faq-h1">FAQs</h1>
    <ul class="faq-list">
      <li v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleAnswer(index)">
          <h3 class="faq-question-text">{{ faq.question }}</h3>
          <span class="faq-icon">{{ isOpen(index) ? '-' : '+' }}</span>
        </div>
        <div class="faq-answer" :class="{ 'faq-answer--open': isOpen(index) }">
          <p class="faq-answer-text">{{ faq.answer }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'FaqList',
    props: {
      faqs: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        openIndexes: []
      }
    },
    methods: {
      toggleAnswer(index) {
        if (this.isOpen(index)) {
          this.openIndexes = this.openIndexes.filter((i) => i !== index)
        } else {
          this.openIndexes.push(index)
        }
      },
      isOpen(index) {
        return this.openIndexes.includes(index)
      }
    }
  }
</script>

<style scoped>
  .faq-h1 {
    color: #0b604d;
    padding-block-start: 20px;
    padding-left: 10px;
  }
  .faq-list {
    list-style: none;
    padding: 0;
    margin-bottom: 10;
  }

  .faq-item {
    margin-bottom: px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
  }

  .faq-item:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  }

  .faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    cursor: pointer;
    transition: background-color 0.8s ease;
  }

  .faq-question:hover {
    background-color: #f0f0f0;
  }

  .faq-question-text {
    margin: 15;
    font-size: 15px;
    color: 'primary';
  }

  .faq-icon {
    font-size: 24px;
    transition: transform 0.3s ease;
    color: #0b604d;
  }

  .faq-icon.rotate {
    transform: rotate(45deg);
  }

  .faq-answer {
    padding: 0 25px 5px 10px;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;
  }

  .faq-answer--open {
    height: auto;
    padding: 10px;
  }

  .faq-answer-text {
    margin: 0;
    font-size: 16px;
    color: #0b604d;
    line-height: 1.5;
  }
</style>
