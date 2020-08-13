/**
 * Example store structure
 */

'use strict';

function generateQuestions() {
  let question = STORE.questions[STORE.questionNumber].question;
  //return pageTemplates[1].content;
  return `<h2>Question ${STORE.questionNumber}<h2>   
  <form>
      <p>${STORE.questions[STORE.questionNumber].question}</p>
          <input name="answers" type='radio' value=${STORE.questions[STORE.questionNumber].answers[0]}>
            <label for='answer 1'>${STORE.questions[STORE.questionNumber].answers[0]}</label><br>
          <input name="answers" type='radio' value=${STORE.questions[STORE.questionNumber].answers[1]}>
            <label for='answer 2'>${STORE.questions[STORE.questionNumber].answers[1]}</label><br>
          <input name="answers" type='radio' value=${STORE.questions[STORE.questionNumber].answers[2]}>
            <label for='answer 3'>${STORE.questions[STORE.questionNumber].answers[2]}</label><br>
          <input name="answers" type='radio' value=${STORE.questions[STORE.questionNumber].answers[3]}>
            <label for='answer 4'>${STORE.questions[STORE.questionNumber].answers[3]}</label><br>                       
    </form>
    <button type='submit' class='quizProgress'>Submit</button>
  <footer class='ticker'>
      <p class='progress'>${STORE.questionNumber} of ${STORE.questions.length-1}</p>
      <p class='scoreCount'>${STORE.score} correct, ${STORE.questionNumber - STORE.score-1} incorrect.</p>
  </footer>`;
}

function generateStartPage() {
  //return pageTemplates[0].content;
  return  `<p class='startPara'>  
  So begins the quiz. Test your knowledge by pressing the start button below</p>
  <img src="images/beethoven-guitar-resize.jpg" alt="Beethoven Challenges You!"/><br>
<button class='begin'>Start Quiz</button>`;
}

function generateResultsPage() {
  //return pageTemplates[2].content;
  let trophy = '';
  switch(STORE.score) {
    case 0: trophy = `<img src="images/trophy-zero-correct.jpg" alt="Too bad, so sad!"/><p>Too bad, so sad!</p>`;
    break;
    case 1: trophy = `<img src="images/trophy-one-correct.jpg" alt="Better luck next time!"/><p>Better luck next time!</p>`;
    break;
    case 2: trophy = `<img src="images/trophy-two-correct.jpg" alt="Room for Improvement!"/><p>Room for Improvement!</p>`;
    break;
    case 3: trophy = `<img src="images/trophy-three-correct.jpg" alt="Not bad!"/><p>Not bad!</p>`;
    break;
    case 4: trophy = `<img src="images/trophy-four-correct.jpg" alt="Pretty good!"/><p>Pretty good!</p>`;
    break;
    case 5: trophy = `<img src="images/trophy-five-correct.jpg" alt="Great job!"/><p>Great job!</p>`;
    break;
    case 6: trophy = `<img src="images/trophy-all-correct.jpg" alt="Outta this world!"/><p>Cosmic brain! Outta this world!</p>`;
    break;
  }
  return   `<h2>Results</h2>
  <h2 class='scoreResult'> </h2>  
  <p class='scoreBoard'>${STORE.score} Correct!</p>
  <div class='trophy'>${trophy}</div>
  <button class='restart'>Restart Quiz</button>`;
}

function renderer() {
  if (STORE.questionNumber < STORE.questions.length) {
    let html = generateQuestions();
    $('main').html(html);
    clickerTwo();
  } else {
    let html = generateResultsPage();
    $('main').html(html);
    clickerThree();
  }
}

function main() {
  let startPage = generateStartPage();
  $('main').html(startPage);
  clicker();
};

function submitAnswer(event) {
  //event.preventDefault();
  let answer = $('input[name=answers]:checked').val();
  console.log(answer);
  if(STORE.questions[STORE.questionNumber].correctAnswer == answer){
    alert('You are right!');
    STORE.score++;
  } else {
    alert('You are wrong!');
  }
  //STORE.questionNumber++;
  //renderer();
}

function completeItem() {
  console.log($(this).parent());
  alert('you are done');
  renderer();
}

function clicker(){
  $('.begin').click(function(event){
    event.preventDefault();
    console.log('oink');
    STORE.quizStarted = true;
    STORE.questionNumber++
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderer();
  });
};

function clickerTwo(){
  $('.quizProgress').click(function(event){
    event.preventDefault();
    submitAnswer();
    STORE.questionNumber++;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderer();
  });
};

function clickerThree(){
  $('.restart').click(function(event){
    event.preventDefault();
    console.log('oink');
    STORE.questionNumber=1;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    STORE.score=0;
    renderer();
  });
};

$(main);

/*
function renderStart() {
  $('.js-render-page-here').replaceWith(pageTemplates[0].content);
}

function renderQuestions() {
  console.log('i hear u');
  $('.js-render-page-here').replaceWith(pageTemplates[1].content);
  console.log(pageTemplates[1].content)
}

function renderResults() {
  $('.js-render-page-here').replaceWith(pageTemplates[3].content);
}

$(main);
*/

/* pure suffering
function renderStart() {
  $('.js-render-page-here').html(pageTemplates[0].content);
}

//leave this to Jeff's magic
function renderQuestions() {
  if (STORE.questionNumber < 6) {
    $('.js-render-page-here').replaceWith(pageTemplates[1].content);
    progressQuiz();
  }
};

function renderFinalQ() {
  $('.js-render-page-here').replaceWith(pageTemplates[2].content);
  endQuiz();
}

function renderResults() {
  $('.js-render-page-here').replaceWith(pageTemplates[3].content);
};

function main() {
  renderStart();
  beginQuiz();
  //renderQuestions();
  //renderFinalQ();
  //renderResults();
  //endQuiz();
}

//Will take to first question of Quiz
function beginQuiz() {
  $('#begin').on('click', function (evt) {
    evt.preventDefault();
    STORE.quizStarted = true;
    STORE.questionNumber++;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderQuestions();
  });
}

function progressQuiz() {
  $('#progress').on('click', function (evt) {
    evt.preventDefault();
    STORE.questionNumber++;
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderQuestions();
  });
};

function endQuiz() {
  $('#finish').on('click', function (evt) {
    evt.preventDefault();
    console.log(STORE.questionNumber);
    console.log(STORE.quizStarted);
    renderResults();
  })
};

$(main);
*/



/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)