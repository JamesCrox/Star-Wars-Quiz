let questions = [{
      question: "Where is Yoda's home planet",
      choice1: 'Dagobar',
      choice2: 'Naboo',
      choice3: 'Tatooine',
      choice4: 'Kashyyyk',
      answer: '1'
   },
   {
      question: "Who built C-3P0?",
      choice1: 'Princess Leia',
      choice2: 'Han Solo',
      choice3: 'Luke Skywalker',
      choice4: 'Anakin Skywalker',
      answer: '4'
   },
   {
      question: "Who was Count Dooku’s padawan before he left the Jedi?",
      choice1: 'Yoda',
      choice2: 'Qui-Gon-Jinn',
      choice3: 'Obi Wan',
      choice4: 'Mace Windu',
      answer: '2'
   },
   {
      question: "Who is the First Order’s supreme leader?",
      choice1: 'Darth Vader',
      choice2: 'Snoke',
      choice3: 'Kylo Ren',
      choice4: 'Palpatine',
      answer: '2'
   },
   {
      question: "Who was the Jedi master that ordered to create clones?",
      choice1: 'Plo Koon',
      choice2: 'Count Dooku',
      choice3: 'Yoda',
      choice4: 'Syfo Dyas',
      answer: '4'
   },
   {
      question: "Who was Anakin Skywalker’s Padawan?",
      choice1: 'Ahsoka Tano',
      choice2: 'Ezra Bridger',
      choice3: 'Luke Skywalker',
      choice4: 'Cal Kestis',
      answer: '1'
   },
   {
      question: "What is Mando’s real name from The Mandalorian?",
      choice1: 'Cobb Vanth',
      choice2: 'Toro Calican',
      choice3: 'Ranzar Malk',
      choice4: 'Din Djarin',
      answer: '4'
   },
   {
      question: "Per Yoda, what is the path to the dark side?",
      choice1: 'Fear',
      choice2: 'Suffering',
      choice3: 'Anger',
      choice4: 'Power',
      answer: '1'
   },
   {
      question: "What was Finn’s stormtrooper number?",
      choice1: 'FN-4291',
      choice2: 'FN-2817',
      choice3: 'FN-2187',
      choice4: 'FN-3297',
      answer: '3'
   },
   {
      question: "How many Sith are there?",
      choice1: '1000+',
      choice2: '2',
      choice3: '100',
      choice4: '88',
      answer: '2'
   }
];

let question = document.getElementById('question')
let choices = Array.from(document.querySelectorAll('.choice-text'))
let progressText = document.getElementById('progressText')
let scoreText = document.getElementById('score')
let progressBarFull = document.getElementById('progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let SCORE_POINTS = 100
let MAX_QUESTIONS = 10

// start game function
function startGame() {
   questionsCounter = 0
   score = 0
   availableQuestions = [...questions]
   getNewQuestion()

};

// function to call new questions
function getNewQuestion() {
   if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
      localStorage.setItem('mostRecentScore', score)
      return window.location.assign('end-game.html')
   }

   // Question counter on main quiz page
   questionCounter++
   progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
   progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

   const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
   currentQuestion = availableQuestions[questionsIndex]
   question.innerText = currentQuestion.question

   choices.forEach(choice => {
      const number = choice.dataset['number']
      choice.innerText = currentQuestion['choice' + number]
   })

   availableQuestions.splice(questionsIndex, 1)

   acceptingAnswers = true
}

choices.forEach(choice => {
   choice.addEventListener('click', e => {
      if (!acceptingAnswers) return

      acceptingAnswers = false
      const selectedChoice = e.target
      const selectedAnswer = selectedChoice.dataset['number']

      let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

      if (classToApply === 'correct') {
         incrementScore(SCORE_POINTS)
      }

      selectedChoice.parentElement.classList.add(classToApply)

      setTimeout(() => {
         selectedChoice.parentElement.classList.remove(classToApply)
         getNewQuestion()

      }, 500)
   })
})
// increment score function
function incrementScore(num) {
   score += num
   scoreText.innerText = score
}

startGame()