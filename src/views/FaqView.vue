<script>
  import FaqList from '../components/FaqList.vue'

  export default {
    components: {
      FaqList
    },
    data() {
      return {
        faqs: [
          {
            question: 'Vad är Earthly?',
            answer: 'En organisation vars mål är att främja miljön.'
          },
          {
            question: 'Hur kommer jag i kontakt med er?',
            answer: 'Fullständig kontaktinformation finns på hemsidan.'
          },
          {
            question: 'Är tipsen länkade med quizet?',
            answer: 'Ja.'
          },
          {
            question: 'Vad betyder dem olika symbolerna.',
            answer:
              'Text finns under symbolerna, behövs ytterligare information så kolla på Göteborg stads hemsida.'
          },
          {
            question: 'Hur samlar jag poäng?',
            answer:
              'Poäng i tabellen samlar du genom att spela vårt quiz och få så många poäng som möjligt, du kan därefter gemföra med dina vänners resultat.'
          },
          {
            question: 'När grundades er organisation?',
            answer: 'Vi grundades 2021.'
          },
          {
            question: 'Har ni några utsatta mål?',
            answer:
              'Vårt största mål är att privatpersoner i Sverge ska inom 2035 vara helt koldioxid-neutrala.'
          }
        ]
      }
    }
  }
</script>
<template>
  <div>
    <FaqList :faqs="faqs" />
  </div>
</template>
