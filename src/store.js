import { createStore } from 'vuex'

const mutations = {},
  state = {
    quizQuestions: [
      {
        id: 1,
        question:
          'How much water do you think is required to produce ONE pair of jeans?',
        correctAnswer: '11,000 l',
        mockAnswer: '7,000 l',
        mockAnswer2: '15,000 l',
        mockAnswer3: '3,000 l'
      },
      {
        id: 2,
        question:
          'How much food do you think we on average throw away per person each year in Sweden?',
        correctAnswer: '72 kg',
        mockAnswer: '52 kg',
        mockAnswer2: '92 kg',
        mockAnswer3: '82 kg'
      },
      {
        id: 3,
        question:
          'How much meat do you think we eat on average in Sweden each year?',
        correctAnswer: '85 kg',
        mockAnswer: '75 kg',
        mockAnswer2: '95 kg',
        mockAnswer3: '65 kg'
      },
      {
        id: 4,
        question: 'Which of the following options does NOT prevent waste',
        correctAnswer: 'Always buy the cheapest option',
        mockAnswer: 'Make sure what we buy lasts longer',
        mockAnswer2: 'Throw away less things',
        mockAnswer3: 'Not buying things of bad quality'
      },
      {
        id: 5,
        question:
          'How much gets thrown away each year in Sweden that could have been recycled instead?',
        correctAnswer: '80,000 ton',
        mockAnswer: '70,000 ton',
        mockAnswer2: '90,000 ton',
        mockAnswer3: '110,000 ton'
      },
      {
        id: 6,
        question: 'Which of the following items can be recycled?',
        correctAnswer: 'A jar',
        mockAnswer: 'A glass',
        mockAnswer2: 'A brick',
        mockAnswer3: 'A plate'
      },
      {
        id: 7,
        question:
          'How much plastic containers do you think we use on average per person in Sweden each year?',
        correctAnswer: '17 kg',
        mockAnswer: '15 kg',
        mockAnswer2: '19 kg',
        mockAnswer3: '21 kg'
      },
      {
        id: 8,
        question: 'How much CO2 do you save per recycled kg of plastic?',
        correctAnswer: '2 kg',
        mockAnswer: '0,5 kg',
        mockAnswer2: '1 kg',
        mockAnswer3: '1,5 kg'
      },
      {
        id: 9,
        question: 'Aproximately how many times can you recycle paper?',
        correctAnswer: '7 times',
        mockAnswer: '5 times',
        mockAnswer2: '9 times',
        mockAnswer3: '11 times'
      },
      {
        id: 10,
        question:
          'The energy saved from recycling ONE aluminum is equvialent to?',
        correctAnswer: '24hrs in front of the computer',
        mockAnswer: '8hrs of TV',
        mockAnswer2: '40 brewed cups of coffee',
        mockAnswer3: '4hrs of TV'
      },
      {
        id: 11,
        question: 'What is true about glass bottles and jars?',
        correctAnswer: 'You do not have to remove the label',
        mockAnswer: 'You do not have to remove the cap/lid',
        mockAnswer2: 'Coloured and transparent glass is recycled together',
        mockAnswer3: 'You can recycle a regular drinking glass'
      },
      {
        id: 12,
        question: 'Your toothbrush goes in what container?',
        correctAnswer: 'Residual waste',
        mockAnswer: 'Food waste',
        mockAnswer2: 'Plastic',
        mockAnswer3: 'Landfill waste'
      },
      {
        id: 13,
        question: 'How many times can you recycle glass?',
        correctAnswer: 'Infinite times',
        mockAnswer: 'Ten times',
        mockAnswer2: 'A hundred times',
        mockAnswer3: 'A thousand times'
      },
      {
        id: 14,
        question:
          'How much clothes & textiles do each swede on average throw away each year? ',
        correctAnswer: '7,5 kg',
        mockAnswer: '5,5 kg',
        mockAnswer2: '6,5 kg',
        mockAnswer3: '8,5 kg'
      },
      {
        id: 15,
        question: 'Empty toilet & kitchen paper rolls goes where?',
        correctAnswer: 'Paper packaging',
        mockAnswer: 'It contains glue so; residual waste',
        mockAnswer2: 'News paper bin',
        mockAnswer3: 'Flush it down the toilet'
      },
      {
        id: 16,
        question:
          'During COVID times we have used a lot of mouth guards, where should you place this after it has been used?',
        correctAnswer: 'Residual waste',
        mockAnswer:
          'Those contain a bit of plastic so therefor among plastic packaging',
        mockAnswer2: 'They have to be delivered to a proper recycling station',
        mockAnswer3:
          'Take your time to separate the mouth guards, and then sort the different pieces as plastic packaging, metal & paper packaging'
      },
      {
        id: 17,
        question: 'How do you sort baking paper?',
        correctAnswer: 'Baking paper is sorted as residual waste',
        mockAnswer: 'It contains plastic so therefor among plastic packaging',
        mockAnswer2: 'Paper packaging',
        mockAnswer3: 'Never throw away baking paper, use it again'
      },
      {
        id: 18,
        question: 'A package of Kalles caviar goes where?',
        correctAnswer:
          'The container as metal and the cap as plastic packaging',
        mockAnswer: 'Everything straight down the metal containers',
        mockAnswer2: 'Container in residual waste, cap as plastic',
        mockAnswer3: 'Food waste since you could not squeeze everything out'
      },
      {
        id: 19,
        question: 'How do you recycle styrofoam?',
        correctAnswer: 'Plastic packaging',
        mockAnswer: 'Residual waste',
        mockAnswer2: 'Paper packaging',
        mockAnswer3: 'Give to your kids or pets as they love styrofoam'
      },
      {
        id: 20,
        question: 'Coffee filters goes where?',
        correctAnswer: 'Food waste',
        mockAnswer: 'Paper packaging',
        mockAnswer2: 'Residual waste',
        mockAnswer3: 'Save coffeefilters for next time you replant a flower'
      },
      {
        id: 21,
        question: 'An empty bag of chips goes where?',
        correctAnswer: 'Plastic packaging',
        mockAnswer: 'Residual waste',
        mockAnswer2:
          'The bags feel and looks shiny, therefor it can not be plastic but some sort of metal and goes in metal packaging!',
        mockAnswer3: 'There is always crumbs left so it belongs in Food waste'
      },
      {
        id: 22,
        question: 'random question',
        correctAnswer: 'correct answer',
        mockAnswer: 'fel svar',
        mockAnswer2: 'fel svar igen',
        mockAnswer3: 'fel igen!'
      },
      {
        id: 23,
        question: 'random question',
        correctAnswer: 'correct answer',
        mockAnswer: 'fel svar',
        mockAnswer2: 'fel svar igen',
        mockAnswer3: 'fel igen!'
      },
      {
        id: 24,
        question: 'random question',
        correctAnswer: 'correct answer',
        mockAnswer: 'fel svar',
        mockAnswer2: 'fel svar igen',
        mockAnswer3: 'fel igen!'
      },
      {
        id: 25,
        question: 'random question',
        correctAnswer: 'correct answer',
        mockAnswer: 'fel svar',
        mockAnswer2: 'fel svar igen',
        mockAnswer3: 'fel igen!'
      },
      {
        id: 26,
        question: 'random question',
        correctAnswer: 'correct answer',
        mockAnswer: 'fel svar',
        mockAnswer2: 'fel svar igen',
        mockAnswer3: 'fel igen!'
      },
      {
        id: 27,
        question: 'random question',
        correctAnswer: 'correct answer',
        mockAnswer: 'fel svar',
        mockAnswer2: 'fel svar igen',
        mockAnswer3: 'fel igen!'
      },
      {
        id: 28,
        question: 'random question',
        correctAnswer: 'correct answer',
        mockAnswer: 'fel svar',
        mockAnswer2: 'fel svar igen',
        mockAnswer3: 'fel igen!'
      },
      {
        id: 29,
        question: 'random question',
        correctAnswer: 'correct answer',
        mockAnswer: 'fel svar',
        mockAnswer2: 'fel svar igen',
        mockAnswer3: 'fel igen!'
      },
      {
        id: 30,
        question: 'random question',
        correctAnswer: 'correct answer',
        mockAnswer: 'fel svar',
        mockAnswer2: 'fel svar igen',
        mockAnswer3: 'fel igen!'
      }
    ]
  }

export default createStore({ mutations, state, strict: true })
