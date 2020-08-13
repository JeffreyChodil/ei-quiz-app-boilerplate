'use strict';

// Quiz Questions
const STORE = {
  questions: [
    {
      question: '',
      answers: [
        '',
        '',
        '',
        ''
      ],
      correctAnswer: ''
    },
    {
      question: 'How many notes are in a Pentatonic Scale?',
      answers: [
        'Four',
        'Five',
        'Six',
        'Eleven'
      ],
      correctAnswer: 'Five'
    },
    {
      question: 'What instrument did Paganini play?',
      answers: [
        'Flute',
        'Violin',
        'Piano',
        'Trumpet'
      ],
      correctAnswer: 'Violin'
    },
    {
      question: 'Which style of music did Jimi Hendrix pioneer?',
      answers: [
        'Jazz Fusion',
        'Funk',
        'Psychedelic Rock',
        'Jazz Bebop'
      ],
      correctAnswer: 'Psychedelic'
    },
    {
      question: 'Which of the following is NOT a rapper\'s name?',
      answers: [
        'Doctor Octagon',
        'Ghostface Killah',
        'Lil Poopy',
        'Ice Truckah'
      ],
      correctAnswer: 'Ice'
    },
    {
      question: 'What comes next? "Do, Re, Mi, __"',
      answers: [
        'Ti',
        'Sol',
        'Fa',
        'La'
      ],
      correctAnswer: 'Fa'
    },
    {
      question: 'How many keys does a piano have?',
      answers: [
        '88',
        '100',
        '52',
        '75'
      ],
      correctAnswer: '88'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,  
};

const pageTemplates = [
  // {
  //   pageName: 'frontPage',
  //   content: `
  // <p class='startPara'>So begins the quiz. Test your knowledge by pressing the start button below</p>  
  // <button class='begin'>Start Quiz</button>  
  // `},
  // {
  //   pageName: 'questionPage',
  //   content: `
  // <h2>Question ${STORE.questionNumber+1}<h2>   
  // <form>
  //     <p>${STORE.questions[STORE.questionNumber+1].question}</p>
  //         <input name="answers" type='radio' value='answer 1'>
  //           <label for='answer 1'>${STORE.questions[STORE.questionNumber].answers[0]}</label><br>
  //         <input name="answers" type='radio' value='answer 2'>
  //           <label for='answer 2'>${STORE.questions[STORE.questionNumber].answers[1]}</label><br>
  //         <input name="answers" type='radio' value='answer 3'>
  //           <label for='answer 3'>${STORE.questions[STORE.questionNumber].answers[2]}</label><br>
  //         <input name="answers" type='radio' value='answer 4'>
  //           <label for='answer 4'>${STORE.questions[STORE.questionNumber].answers[3]}</label><br>                       
  //   </form>
  //   <button type='submit' class='quizProgress'>Submit</button>
  // <footer class='ticker'>
  //     <p class='progress'>${STORE.questionNumber+1} of ${STORE.questions.length}</p>
  //     <p class='scoreCount'>${STORE.score} correct, ${STORE.questionNumber - STORE.score} incorrect.</p>
  // </footer>
  // `},
  // {
  //   pageName: 'resultsPage',
  //   content: `
  // <h2>Results</h2>
  // <h2 class='scoreResult'> </h2>
  // <p>${STORE.questions[0].correctAnswer}<br>[userAnswers[0]]</p>
  // <p>${STORE.questions[1].correctAnswer}<br>[userAnswers[1]]</p>
  // <p>${STORE.questions[2].correctAnswer}<br>[userAnswers[2]]</p>
  // <p>${STORE.questions[3].correctAnswer}<br>[userAnswers[3]]</p>
  // <p>${STORE.questions[4].correctAnswer}<br>[userAnswers[4]]</p>
  //     <!--although this is a different button than the start button, it's style and function remains the same-->
  //   <button class='restart'>Restart Quiz</button>
  // `
  //}
];