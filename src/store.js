import { createStore } from 'vuex'

const mutations = {},
  state = {
    todaysTip: 0,
    quizQuestions: [
      {
        id: 1,
        ifRight:
          'Correct, it requires 11,000l of water to produce ONE pair of jeans.',
        ifWrong:
          'Sorry, it does require 11,00l water for a single pair of jeans.',
        question:
          'How much water do you think is required to produce ONE pair of jeans?',
        correctAnswer: '11,000 l',
        wrongAnswers: ['7,000 l', '15,000 l', '3,000 l', '13,000 l', '8,000 l'],
        tip: 'the production of ONE pair of jeans requires 11,000 liters of water!',
        tipPic: '../../assets/tipPics/jeans.jpg'
      },
      {
        id: 2,
        ifRight: 'Correct, we throw away 72 kg food per person each year.',
        ifWrong: 'Sorry, correct answer is 72 kg.',
        question:
          'How much food do you think we on average throw away per person each year in Sweden?',
        correctAnswer: '72 kg',
        wrongAnswers: ['52 kg', '92 kg', '82 kg', '62 kg', '92 kg'],
        tip: 'we throw away 72kg of food / person each year in Sweden.'
      },
      {
        id: 3,
        ifRight: 'Correct, we consume 85 kg meat per person each year.',
        ifWrong: 'Sorry, correct answer is 85 kg.',
        question:
          'How much meat do you think we eat on average in Sweden each year?',
        correctAnswer: '85 kg',
        wrongAnswers: ['65 kg', '75 kg', '95 kg', '105 kg'],
        tip: 'the average swede eats 85kg of meat / year.'
      },
      {
        id: 4,
        ifRight:
          'Correct, buying bad quality stuff generally means you need to buy the same item again more frequently than good quality stuff.',
        ifWrong:
          'Sorry, correct answer is that you should not buy bad quality stuff.',
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
        ifRight:
          'Correct, we throw away 80,000 tons of stuff that should have been recycled instead.',
        ifWrong: 'Sorry, the correct answer is 80,000 tons.',
        question:
          'How much gets thrown away each year in Sweden that could have been recycled instead?',
        correctAnswer: '80,000 ton',
        wrongAnswers: ['60,000 ton', '70,000 ton', '90,000 ton', '100,000 ton'],
        tip: 'we throw away 80,000 ton of trash each year that could have been recycled.'
      },
      {
        id: 6,
        ifRight: 'Correct, only the jar can be recycled.',
        ifWrong: 'Sorry, it is only the jar that can be recycled.',
        question: 'Which of the following items can be recycled?',
        correctAnswer: 'A jar',
        wrongAnswers: ['A glass', 'A brick', 'A plate'],
        tip: '?'
      },
      {
        id: 7,
        ifRight:
          'Correct, we consume in a way that we use 17 kg of plastic containers each year.',
        ifWrong: 'Sorry, the correct answer is 17 kg.',
        question:
          'How much plastic containers do you think we use on average per person in Sweden each year?',
        correctAnswer: '17 kg',
        wrongAnswers: ['15 kg', '16 kg', '18 kg', '19 kg'],
        tip: '?'
      },
      {
        id: 8,
        ifRight: 'Correct, you save 2 kg CO2 for every kg of recycled plastic',
        ifWrong: 'Sorry, correct answer is 2 kg CO2.',
        question: 'How much CO2 do you save per recycled kg of plastic?',
        correctAnswer: '2 kg',
        wrongAnswers: ['1 kg', '1,5 kg', '2,5 kg', '3 kg'],
        tip: 'every kg of plastic you recycle saves 2kg of CO2!'
      },
      {
        id: 9,
        ifRight: 'Correct, you can recycle paper as much as 7 times!',
        ifWrong: 'Sorry, the correct answer is 7 times.',
        question: 'Aproximately how many times can you recycle paper?',
        correctAnswer: '7 times',
        wrongAnswers: ['3 times', '5 times', '9 times', '11 times'],
        tip: 'you can recycle paper 7 times!'
      },
      {
        id: 10,
        ifRight:
          'Correct, you can sit guilt-free in front of the computer for 24hhrs for each recycled can.',
        ifWrong:
          'Sorry, correct answer is that it is equvialent to 24hrs in front of the computer.',
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
        ifRight: 'Correct, you do not have to remove label(s).',
        ifWrong:
          'Sorry, the correct answer is that you do not have to remove the label(s).',
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
        ifRight: 'Correct, it goes into the residual waste container.',
        ifWrong:
          'Sorry, correct answer is that you should throw it into the residual waste container.',
        question: 'Your toothbrush goes in what container?',
        correctAnswer: 'Residual waste',
        wrongAnswers: ['Food waste', 'Plastic', 'Landfill waste'],
        tip: 'your toothbrush goes into the residual waste container.'
      },
      {
        id: 13,
        ifRight: 'Correct, you can recycle glass indefinitely.',
        ifWrong:
          'Sorry, correct answer is that you can recycle glass indefinitely!',
        question: 'How many times can you recycle glass?',
        correctAnswer: 'Infinite times',
        wrongAnswers: ['Ten times', 'A hundred times', 'A thousand times'],
        tip: 'you can recycle glass forever!'
      },
      {
        id: 14,
        ifRight:
          'Correct, we throw away 7,5 kg clothes & textiles each, each year.',
        ifWrong: 'Sorry, correct answer is 7,5 kg each, each year.',
        question:
          'How much clothes & textiles do each swede on average throw away each year? ',
        correctAnswer: '7,5 kg',
        wrongAnswers: ['5,5 kg', '6,5 kg', '8,5 kg', '9,5 kg'],
        tip: 'we throw away 7,5kg of textiles / person and year in Sweden.'
      },
      {
        id: 15,
        ifRight: 'Correct, it goes to paper packaging!',
        ifWrong: 'Sorry, correct answer is paper packaging',
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
        ifRight: 'Correct, it goes in the residual waste container.',
        ifWrong:
          'Sorry, correct answer is that it should go into the residual waste container.',
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
        ifRight: 'Correct!',
        ifWrong:
          'Sorry, correct answer is that it should go in the residual waste container.',
        question: 'How do you sort baking paper?',
        correctAnswer: 'Baking paper is sorted as residual waste',
        wrongAnswers: [
          'It contains plastic so therefor among plastic packaging',
          'Paper packaging',
          'Never throw away baking paper, use it again'
        ],
        tip: 'after you finish your buns you throw the baking paper into the residual waste.'
      },
      {
        id: 18,
        ifRight: 'Correct!',
        ifWrong:
          'Sorry, correct answer is that the container goes as metal and the cap as plastic packaging.',
        question: 'A package of Kalles caviar goes where?',
        correctAnswer:
          'The container as metal and the cap as plastic packaging',
        wrongAnswers: [
          'Everything straigth down the metal containers',
          'Container in residual waste, cap as plastic',
          'Food waste since you could not squeeze everything out'
        ],
        tip: 'your tube of Kalles Caviar goes into the metal container (except the cap, it goes into plastic packaging).'
      },
      {
        id: 19,
        ifRight: 'Correct, it to plastic packaging',
        ifWrong:
          'Sorry, correct answer is that it should be recycled as plastic packaging.',
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
        ifRight:
          'Correct! (let it dry before you put it there to avoid a mess).',
        ifWrong: 'Sorry, correct answer is food waste.',
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
        ifRight: 'Correct!',
        ifWrong:
          'Sorry, correct answer is that it is recycled as plastic packaging.',
        question: 'An empty bag of chips goes where?',
        correctAnswer: 'Plastic packaging',
        wrongAnswers: [
          'Residual waste',
          'The bags feel and looks shiny, therefore it can not be plastic but some sort of metal and goes in metal packaging!',
          'There is always crumbs left so it belongs in food waste'
        ],
        tip: 'you can recycle your empty chipbag as plastic packaging.'
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
    ],
    trash: [
      {
        id: 1,
        engName: 'waste oil',
        sweName: 'spillolja',
        sortAs: 'hazardous waste',
        sign: 'hazardous-waste',
        returnAt: 'recycling center',
        whatHappens:
          'Det mesta återvinns. Det som inte går att återvinna förbränns eller deponeras under säkra former.'
      },

      {
        id: 2,
        engName: 'needles',
        sweName: 'kanyler',
        sortAs: 'pharmaceuticals',
        sign: 'pharma',
        returnAt: 'pharmacy',
        whatHappens: 'Lämnas vanligen till energiutvinning.'
      },

      {
        id: 3,
        engName: 'mercury thermometer',
        sweName: 'kvicksilvertermometrar',
        sortAs: 'hazardous waste',
        sign: 'hazardous-waste',
        returnAt: 'recycling center',
        whatHappens:
          'Det mesta återvinns. Det som inte går att återvinna förbränns eller deponeras under säkra former.'
      },

      {
        id: 4,
        engName: 'medicine',
        sweName: 'medicin',
        sortAs: 'pharmaceuticals',
        sign: 'pharma',
        returnAt: 'pharmacy',
        whatHappens: 'Lämnas vanligen till energiutvinning.'
      },

      {
        id: 5,
        engName: 'paint',
        sweName: 'färg',
        sortAs: 'hazardous waste',
        sign: 'hazardous-waste',
        returnAt: 'recycling center',
        whatHappens:
          'Det mesta återvinns. Det som inte går att återvinna förbränns eller deponeras under säkra former.'
      },

      {
        id: 6,
        engName: 'glue',
        sweName: 'lim',
        sortAs: 'hazardous waste',
        sign: 'hazardous-waste',
        returnAt: 'recycling center',
        whatHappens:
          'Det mesta återvinns. Det som inte går att återvinna förbränns eller deponeras under säkra former.'
      },

      {
        id: 7,
        engName: 'power cord',
        sweName: 'sladd',
        sortAs: 'electronics',
        sign: 'cables',
        returnAt: 'recycling center',
        whatHappens: 'Återvinns och blir till nya produkter.'
      },

      {
        id: 8,
        engName: 'dishwasher',
        sweName: 'diskmaskin',
        sortAs: 'major appliances',
        sign: 'major-appliances',
        returnAt: 'recycling center',
        whatHappens: 'Farliga ämnen tas omhand och metaller återvinns.'
      },

      {
        id: 9,
        engName: 'stove',
        sweName: 'spis',
        sortAs: 'major appliances',
        sign: 'major-appliances',
        returnAt: 'recycling center',
        whatHappens: 'Farliga ämnen tas omhand och metaller återvinns.'
      },

      {
        id: 10,
        engName: 'led-light',
        sweName: 'led-lampor',
        sortAs: 'electronics',
        sign: 'electronics',
        returnAt: 'recycling center',
        whatHappens: 'Återvinns och blir till nya produkter.'
      },

      {
        id: 11,
        engName: 'solar panels',
        sweName: 'solpaneler',
        sortAs: 'solar panels',
        sign: 'solar-panels',
        returnAt: 'recycling center',
        whatHappens: '?'
      },

      {
        id: 12,
        engName: 'battery',
        sweName: 'batteri',
        sortAs: 'batteries',
        sign: 'batteries',
        returnAt: 'battery box',
        whatHappens:
          'Mycket metaller och andra material kan materialåtervinnas. En del energiåutvinns medan kvicksilver slutförvaras på ett säkert sätt.'
      },

      {
        id: 13,
        engName: 'car battery',
        sweName: 'bilbatteri',
        sortAs: 'hazardous waste',
        sign: 'hazardous-waste',
        returnAt: 'recycling center',
        whatHappens:
          'Det mesta återvinns. Det som inte går att återvinna förbränns eller deponeras under säkra former.'
      },

      {
        id: 14,
        engName: 'computer',
        sweName: 'dator',
        sortAs: 'electronics',
        sign: 'electronics',
        returnAt: 'recycling center',
        whatHappens: 'Återvinns och blir till nya produkter.'
      },

      {
        id: 15,
        engName: 'electric toothbrush',
        sweName: 'eltandborste',
        sortAs: 'electronics',
        sign: 'electronics',
        returnAt: 'recycling center',
        whatHappens: 'Återvinns och blir till nya produkter.'
      },

      {
        id: 16,
        engName: 'hair dryer',
        sweName: 'hårtork',
        sortAs: 'electronics',
        sign: 'electronics',
        returnAt: 'recycling center',
        whatHappens: 'Återvinns och blir till nya produkter.'
      },

      {
        id: 17,
        engName: 'newspaper',
        sweName: 'tidning',
        sortAs: 'newspapers',
        sign: 'newspapers',
        returnAt: 'recycling station',
        whatHappens:
          'Tidningar och trycksaker blir till nya tidningar, men även toalett- och hushållspapper.'
      },

      {
        id: 18,
        engName: 'bubble wrap',
        sweName: 'bubbelplast',
        sortAs: 'plastic packaging',
        sign: 'plastic-packaging',
        returnAt: 'recycling station',
        whatHappens:
          'Plasten återvinns till nya plastprodukter, t ex krukor, avloppsrör, utegolv, stövlar och flipflop-skor.'
      },

      {
        id: 19,
        engName: 'can',
        sweName: 'burk',
        sortAs: 'metal',
        sign: 'metal-packaging',
        returnAt: 'recycling station',
        whatHappens:
          'Metallförpackningar såsom konservburkar och kaviartuber blir ex till järnvägsräls, motordelar och armeringsjärn. Inget är för litet för att återvinnas, minsta kapsyl gör nytta. Metall kan återvinnas nästan hur många gånger om helst.'
      },

      {
        id: 20,
        engName: 'pet bottle',
        sweName: 'pet flaska',
        sortAs: 'plastic packaging',
        sign: 'plastic-packaging',
        returnAt: 'grocery store',
        whatHappens:
          'You get money back if you return your PET bottles at your store.'
      },

      {
        id: 21,
        engName: 'styrofoam',
        sweName: 'frigolit',
        sortAs: 'plastic packaging',
        sign: 'plastic-packaging',
        returnAt: 'recycling station',
        whatHappens:
          'Plasten återvinns till nya plastprodukter, t ex krukor, avloppsrör, utegolv, stövlar och flipflop-skor.'
      },

      {
        id: 22,
        engName: 'plastic bag',
        sweName: 'plastpåse',
        sortAs: 'plastic packaging',
        sign: 'plastic-packaging',
        returnAt: 'recycling station',
        whatHappens:
          'Plasten återvinns till nya plastprodukter, t ex krukor, avloppsrör, utegolv, stövlar och flipflop-skor.'
      },

      {
        id: 23,
        engName: 'cardboard',
        sweName: 'wellpapp',
        sortAs: 'cardboard',
        sign: 'cardboard',
        returnAt: 'recycling station',
        whatHappens: 'Wellpapp återvinns och blir nytt material.'
      },

      {
        id: 24,
        engName: 'wrapping paper',
        sweName: 'omslagspapper',
        sortAs: 'residual waste',
        sign: 'residual-waste',
        returnAt: 'home',
        whatHappens: 'Förbränns och blir värme och energi.'
      },

      {
        id: 25,
        engName: 'watering can',
        sweName: 'vattenkanna',
        sortAs: 'rigid plastic',
        sign: 'rigid-plastic',
        returnAt: 'recycling center',
        whatHappens:
          'Grovplasten återvinns och blir nya produkter eller energiåtervinns.'
      },

      {
        id: 26,
        engName: 'milk packaging',
        sweName: 'mjölkförpackning',
        sortAs: 'paper packaging',
        sign: 'paper-packaging',
        returnAt: 'recycling station',
        whatHappens:
          'Pappersförpackningar blir nya pappersförpackningar, ett mjölkpaket eller en sockerpåse kan till exempel bli cornflakes- eller vällingpaket i sitt nästa liv.'
      },

      {
        id: 27,
        engName: 'mail order catalog',
        sweName: 'postorderkatalog',
        sortAs: 'newspapers',
        sign: 'newspapers',
        returnAt: 'recycling station',
        whatHappens:
          'Tidningar och trycksaker blir till nya tidningar, men även toalett- och hushållspapper.'
      },

      {
        id: 28,
        engName: 'paper',
        sweName: 'papper',
        sortAs: 'newspapers',
        sign: 'newspapers',
        returnAt: 'recycling station',
        whatHappens:
          'Tidningar och trycksaker blir till nya tidningar, men även toalett- och hushållspapper.'
      },

      {
        id: 29,
        engName: 'glass',
        sweName: 'glas',
        sortAs: 'glass',
        sign: 'clear-glass-packaging',
        returnAt: 'recycling station',
        whatHappens:
          'Glasförpackningar blir till nya glasflaskor och burkar, men även andra produkter som t ex glasull, som används för att isolera hus.'
      },

      {
        id: 30,
        engName: 'foil',
        sweName: 'folie',
        sortAs: 'metal packaging',
        sign: 'metal-packaging',
        returnAt: 'recycling station',
        whatHappens:
          'Metallförpackningar såsom konservburkar och kaviartuber blir ex till järnvägsräls, motordelar och armeringsjärn. Inget är för litet för att återvinnas, minsta kapsyl gör nytta. Metall kan återvinnas nästan hur många gånger om helst.'
      },

      {
        id: 31,
        engName: 'cap',
        sweName: 'kapsyl',
        sortAs: 'metal packaging',
        sign: 'metal-packaging',
        returnAt: 'recycling station',
        whatHappens:
          'Metallförpackningar såsom konservburkar och kaviartuber blir ex till järnvägsräls, motordelar och armeringsjärn. Inget är för litet för att återvinnas, minsta kapsyl gör nytta. Metall kan återvinnas nästan hur många gånger om helst.'
      },

      {
        id: 32,
        engName: 'phone',
        sweName: 'telefon',
        sortAs: 'electronics',
        sign: 'electronics',
        returnAt: 'recycling center',
        whatHappens: 'Återvinns och blir till nya produkter.'
      },

      {
        id: 33,
        engName: 'invasive alien species',
        sweName: 'invasiv art',
        sortAs: 'invasive alien species',
        sign: 'invasive',
        returnAt: 'recycling center',
        whatHappens:
          'Växtavfall eller jord som kan innehålla delar från invasiva växter ska aldrig läggas i komposten eller naturen. Privatpersoner kan lägga växtdelar i en säck, försluta väl och lämna på någon av stadens återvinningscentraler.         Kontakta personal innan du lämnar säckarna. Växtdelarna sorteras som brännbart.   Tänk också på att risken för spridning är stor under transport, så förvara materialet i slutna kärl eller säckar. Jordmassor med växtdelar av parkslide och jätteloka får inte flyttas eller återanvändas. Det gäller även om man samlat ihop växtdelarna.'
      },

      {
        id: 34,
        engName: 'coffee',
        sweName: 'kaffe',
        sortAs: 'food waste',
        sign: 'food-waste',
        returnAt: 'recycling station',
        whatHappens:
          'Rötas och blir biogas och biogödsel eller komposteras till näringsrik jord.'
      },

      {
        id: 37,
        engName: 'fabric',
        sweName: 'textilier',
        sortAs: 'fabric',
        sign: 'fabric',
        returnAt: 'recycling center',
        whatHappens:
          'Hel textil återanvänds. Trasig textil skickas till återvinning, exempelvis som trasor eller isolering. Mycket arbete pågår för att återvinna mer textilavfall i ny textil.'
      },

      {
        id: 38,
        engName: 'clothes',
        sweName: 'kläder',
        sortAs: 'fabric',
        sign: 'fabric',
        returnAt: 'recycling center',
        whatHappens:
          'Hel textil återanvänds. Trasig textil skickas till återvinning, exempelvis som trasor eller isolering. Mycket arbete pågår för att återvinna mer textilavfall i ny textil.'
      },

      {
        id: 39,
        engName: 'flowers',
        sweName: 'blommor',
        sortAs: 'garden waste',
        sign: 'garden-waste',
        returnAt: 'recycling center',
        whatHappens:
          'Komposteras. Separat insamling av fallfrukt kan rötas för att bli biogas och biogödsel.'
      },

      {
        id: 40,
        engName: 'twigs',
        sweName: 'grenar',
        sortAs: 'twigs and branches',
        sign: 'twigs-branches',
        returnAt: 'recycling center',
        whatHappens:
          'Materialet flisas, en del komposteras, resten förbränns och blir energi.'
      },

      {
        id: 41,
        engName: 'sofa',
        sweName: 'soffa',
        sortAs: 'upholstered furniture',
        sign: 'upholstered-furniture',
        returnAt: 'recycling central',
        whatHappens: 'Återvinns och blir nya produkter eller energiåtervinns.'
      },

      {
        id: 42,
        engName: 'frying pan',
        sweName: 'stekpanna',
        sortAs: 'metal',
        sign: 'metal',
        returnAt: 'recycling central',
        whatHappens: 'Återvinns till nya produkter.'
      },

      {
        id: 44,
        engName: 'tires',
        sweName: 'däck',
        sortAs: 'tyres',
        sign: 'tyres',
        returnAt: 'recycling central',
        whatHappens: 'Återförsäljaren återvinner däck och fälg.'
      },

      {
        id: 46,
        engName: 'band-aid',
        sweName: 'plåster',
        sortAs: 'residual waste',
        sign: 'residual-waste',
        returnAt: 'home',
        whatHappens: 'Förbränns och blir värme och energi.'
      },

      {
        id: 48,
        engName: 'pot',
        sweName: 'kruka',
        sortAs: 'porcelain & china',
        sign: 'porslin-o-keramik-cmyk',
        returnAt: 'recycling central',
        whatHappens: 'Används till vägbyggen och täckning av avfallsdeponin.'
      },

      {
        id: 49,
        engName: 'candle',
        sweName: 'stearinljus',
        sortAs: 'residual waste',
        sign: 'residual-waste',
        returnAt: 'home',
        whatHappens: 'Förbränns och blir värme och energi.'
      }
    ]
  }

export default createStore({ mutations, state, strict: true })
