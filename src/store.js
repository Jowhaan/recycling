import { createStore } from 'vuex'

const mutations = {},
  state = {
    quizQuestions: [
      {
        id: 1,
        ifRight: '',
        ifWrong: '',
        question:
          'How much water do you think is required to produce ONE pair of jeans?',
        correctAnswer: '11,000 l',
        wrongAnswers: ['7,000 l', '15,000 l', '3,000 l', '13,000 l', '8,000 l'],
        tip: 'the production of ONE pair of jeans requires 11,000 liters of water!'
      },
      {
        id: 2,
        ifRight: '',
        ifWrong: '',
        question:
          'How much food do you think we on average throw away per person each year in Sweden?',
        correctAnswer: '72 kg',
        wrongAnswers: ['52 kg', '92 kg', '82 kg', '62 kg', '92 kg'],
        tip: 'we throw away 72kg of food / person each year in Sweden.'
      },
      {
        id: 3,
        ifRight: '',
        ifWrong: '',
        question:
          'How much meat do you think we eat on average in Sweden each year?',
        correctAnswer: '85 kg',
        wrongAnswers: ['65 kg', '75 kg', '95 kg', '105 kg'],
        tip: 'the average swede eats 85kg of meat / year.'
      },
      {
        id: 4,
        ifRight: '',
        ifWrong: '',
        question: 'Which of the following options does NOT prevent waste',
        correctAnswer: 'Always buy the cheapest option',
        wrongAnswers: [
          'Make sure what we buy lasts longer',
          'Throw away less things',
          'Not buying things of bad quality'
        ],
        tip: '?'
      },
      {
        id: 5,
        ifRight: '',
        ifWrong: '',
        question:
          'How much gets thrown away each year in Sweden that could have been recycled instead?',
        correctAnswer: '80,000 ton',
        wrongAnswers: ['60,000 ton', '70,000 ton', '90,000 ton', '100,000 ton'],
        tip: 'that we throw away 80,000 ton of trash each year that could have been recycled.'
      },
      {
        id: 6,
        ifRight: '',
        ifWrong: '',
        question: 'Which of the following items can be recycled?',
        correctAnswer: 'A jar',
        wrongAnswers: ['A glass', 'A brick', 'A plate'],
        tip: '?'
      },
      {
        id: 7,
        ifRight: '',
        ifWrong: '',
        question:
          'How much plastic containers do you think we use on average per person in Sweden each year?',
        correctAnswer: '17 kg',
        wrongAnswers: ['15 kg', '16 kg', '18 kg', '19 kg'],
        tip: '?'
      },
      {
        id: 8,
        ifRight: '',
        ifWrong: '',
        question: 'How much CO2 do you save per recycled kg of plastic?',
        correctAnswer: '2 kg',
        wrongAnswers: ['1 kg', '1,5 kg', '2,5 kg', '3 kg'],
        tip: 'every kg of plastic you recycle saves 2kg of CO2!'
      },
      {
        id: 9,
        ifRight: '',
        ifWrong: '',
        question: 'Aproximately how many times can you recycle paper?',
        correctAnswer: '7 times',
        wrongAnswers: ['3 times', '5 times', '9 times', '11 times'],
        tip: 'you can recycle paper 7 times!'
      },
      {
        id: 10,
        ifRight: '',
        ifWrong: '',
        question:
          'The energy saved from recycling ONE aluminum can is equvialent to?',
        correctAnswer: '24hrs in front of the computer',
        wrongAnswers: [
          '8hrs of TV',
          '40 brewed cups of coffee',
          '4hrs of TV',
          '30min of a hot shower'
        ],
        tip: 'the energy saved from recycling one single aluminium can is the same as 24 hours in front of the computer.'
      },
      {
        id: 11,
        ifRight: '',
        ifWrong: '',
        question: 'What is true about glass bottles and jars?',
        correctAnswer: 'You do not have to remove the label',
        wrongAnswers: [
          'You do not have to remove the cap/lid',
          'Coloured and transparent glass is recycled together',
          'You can recycle a regular drinking glass'
        ],
        tip: 'when you recycle your bottles and jars you do not have to remove the labels.'
      },
      {
        id: 12,
        ifRight: '',
        ifWrong: '',
        question: 'Your toothbrush goes in what container?',
        correctAnswer: 'Residual waste',
        wrongAnswers: ['Food waste', 'Plastic', 'Landfill waste'],
        tip: 'that your toothbrush goes into the residual waste container.'
      },
      {
        id: 13,
        ifRight: '',
        ifWrong: '',
        question: 'How many times can you recycle glass?',
        correctAnswer: 'Infinite times',
        wrongAnswers: ['Ten times', 'A hundred times', 'A thousand times'],
        tip: 'that you can recycle glass forever!'
      },
      {
        id: 14,
        ifRight: '',
        ifWrong: '',
        question:
          'How much clothes & textiles do each swede on average throw away each year? ',
        correctAnswer: '7,5 kg',
        wrongAnswers: ['5,5 kg', '6,5 kg', '8,5 kg', '9,5 kg'],
        tip: 'we throw away 7,5kg of textiles / person and year in Sweden.'
      },
      {
        id: 15,
        ifRight: '',
        ifWrong: '',
        question: 'Empty toilet & kitchen paper rolls goes where?',
        correctAnswer: 'Paper packaging',
        wrongAnswers: [
          'It contains glue so; residual waste',
          'News paper bin',
          'Flush it down the toilet'
        ],
        tip: 'your paper rolls goes into the paper packaging container.'
      },
      {
        id: 16,
        ifRight: '',
        ifWrong: '',
        question:
          'During COVID times we have used a lot of mouth guards, where should you place this after it has been used?',
        correctAnswer: 'Residual waste',
        wrongAnswers: [
          'Those contain a bit of plastic so therefor among plastic packaging',
          'They have to be delivered to a proper recycling station',
          'Take your time to seperate the mouth guards, and then sort the different pieces as plastic packaging, metal & paper packaging'
        ],
        tip: 'your mouthguard goes into the residual waste container.'
      },
      {
        id: 17,
        ifRight: '',
        ifWrong: '',
        question: 'How do you sort baking paper?',
        correctAnswer: 'Baking paper is sorted as residual waste',
        wrongAnswers: [
          'It contains plastic so therefor among plastic packaging',
          'Paper packaging',
          'Never throw away baking paper, use it again'
        ],
        tip: 'that after you finish your buns you throw the baking paper into the residual waste.'
      },
      {
        id: 18,
        ifRight: '',
        ifWrong: '',
        question: 'A package of Kalles caviar goes where?',
        correctAnswer:
          'The container as metal and the cap as plastic packaging',
        wrongAnswers: [
          'Everything straigth down the metal containers',
          'Container in residual waste, cap as plastic',
          'Food waste since you could not squeeze everything out'
        ],
        tip: 'that your tube of Kalles Caviar goes into the metal container (except the cap, it goes into plastic packaging).'
      },
      {
        id: 19,
        ifRight: '',
        ifWrong: '',
        question: 'How do you recycle styrofoam?',
        correctAnswer: 'Plastic packaging',
        wrongAnswers: [
          'Residual waste',
          'Paper packaging',
          'Give to your kids or pets as they love styrofoam'
        ],
        tip: 'styrofoam goes into the plastic packaging container.'
      },
      {
        id: 20,
        ifRight: '',
        ifWrong: '',
        question: 'Coffee filters goes where?',
        correctAnswer: 'Food waste',
        wrongAnswers: [
          'Paper packaging',
          'Residual waste',
          'Save coffeefilters for the next time you replant a flower'
        ],
        tip: 'coffeefilters goes into your food waste bag.'
      },
      {
        id: 21,
        ifRight: '',
        ifWrong: '',
        question: 'An empty bag of chips goes where?',
        correctAnswer: 'Plastic packaging',
        wrongAnswers: [
          'Residual waste',
          'The bags feel and looks shiny, therefore it can not be plastic but some sort of metal and goes in metal packaging!',
          'There is always crumbs left so it belongs in food waste'
        ],
        tip: 'your can recycle your empty chipbag as plastic packaging.'
      },
      {
        id: 22,
        ifRight: '',
        ifWrong: '',
        question: 'random question',
        correctAnswer: 'correct answer',
        wrongAnswers: [],
        tip: 'Here is a tip'
      },
      {
        id: 23,
        ifRight: '',
        ifWrong: '',
        question: 'random question',
        correctAnswer: 'correct answer',
        wrongAnswers: [],
        tip: 'Here is a tip'
      },
      {
        id: 24,
        ifRight: '',
        ifWrong: '',
        question: 'random question',
        correctAnswer: 'correct answer',
        wrongAnswers: [],
        tip: 'Here is a tip'
      },
      {
        id: 25,
        ifRight: '',
        ifWrong: '',
        question: 'random question',
        correctAnswer: 'correct answer',
        wrongAnswers: [],
        tip: 'Here is a tip'
      },
      {
        id: 26,
        ifRight: '',
        ifWrong: '',
        question: 'random question',
        correctAnswer: 'correct answer',
        wrongAnswers: [],
        tip: 'Here is a tip'
      },
      {
        id: 27,
        ifRight: '',
        ifWrong: '',
        question: 'random question',
        correctAnswer: 'correct answer',
        wrongAnswers: [],
        tip: 'Here is a tip'
      },
      {
        id: 28,
        ifRight: '',
        ifWrong: '',
        question: 'random question',
        correctAnswer: 'correct answer',
        wrongAnswers: [],
        tip: 'Here is a tip'
      },
      {
        id: 29,
        ifRight: '',
        ifWrong: '',
        question: 'random question',
        correctAnswer: 'correct answer',
        wrongAnswers: [],
        tip: 'Here is a tip'
      },
      {
        id: 30,
        ifRight: '',
        ifWrong: '',
        question: 'random question',
        correctAnswer: 'correct answer',
        wrongAnswers: [],
        tip: 'Here is a tip'
      }
    ]
  }

export default createStore({ mutations, state, strict: true })
