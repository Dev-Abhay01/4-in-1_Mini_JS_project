// const quizData = [
//   {
//     question: "What is the capital of France?",
//     answers: ["London", "Paris", "Berlin", "Madrid"],
//     correctAnswer: "Paris",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answers: ["Venus", "Mars", "Jupiter", "Saturn"],
//     correctAnswer: "Mars",
//   },
//   {
//     question: "What is the largest mammal in the world?",
//     answers: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
//     correctAnswer: "Blue Whale",
//   },
//   {
//     question: "Which country is known as the 'Land of the Rising Sun'?",
//     answers: ["China", "Japan", "South Korea", "Vietnam"],
//     correctAnswer: "Japan",
//   },
//   {
//     question: "What is the chemical symbol for the element Gold?",
//     answers: ["Au", "Ag", "Fe", "Cu"],
//     correctAnswer: "Au",
//   },
//   {
//     question: "What is the largest planet in our solar system?",
//     answers: ["Jupiter", "Saturn", "Neptune", "Mars"],
//     correctAnswer: "Jupiter",
//   },
//   {
//     question: "Who wrote the play 'Romeo and Juliet'?",
//     answers: ["William Shakespeare", "Jane Austen", "Mark Twain", "Charles Dickens"],
//     correctAnswer: "William Shakespeare",
//   },
//   {
//     question: "What is the currency of Japan?",
//     answers: ["Yuan", "Pound", "Euro", "Yen"],
//     correctAnswer: "Yen",
//   },
//   {
//     question: "Which famous scientist formulated the theory of relativity?",
//     answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
//     correctAnswer: "Albert Einstein",
//   },
//   {
//     question: "What is the chemical symbol for the element Oxygen?",
//     answers: ["O", "Ox", "Og", "Oy"],
//     correctAnswer: "O",
//   },
//   {
//     question: "Which river is the longest in the world?",
//     answers: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
//     correctAnswer: "Nile River",
//   },
// ];


// const numberOfQuestionsToShow = 6; // Adjust this number to show the desired amount of questions

// let shuffledQuizData = [];
// let currentQuestionIndex = 0;
// let score = 0;

// const questionElement = document.getElementById("question");
// const answerButtonsElement = document.getElementById("answer-buttons");
// const resultsElement = document.getElementById("results");
// const scoreElement = document.getElementById("score-value");
// const startButton = document.getElementById("start-button"); // Get the Start Quiz button element

// function shuffleArray(array) {
//   // Implementation of the Fisher-Yates (Knuth) Shuffle algorithm
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// function startQuiz() {
//   shuffledQuizData = quizData.slice();
//   shuffleArray(shuffledQuizData);
//   currentQuestionIndex = 0;
//   score = 0;
//   resultsElement.classList.add("hide");
//   startButton.classList.add("hide"); // Hide the Start Quiz button
//   loadQuestion();
// }

// function loadQuestion() {
//   if (currentQuestionIndex < numberOfQuestionsToShow) {
//     const currentQuestion = shuffledQuizData[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;
//     answerButtonsElement.innerHTML = "";

//     currentQuestion.answers.forEach((answer) => {
//       const button = document.createElement("button");
//       button.textContent = answer;
//       button.classList.add("btn");
//       button.addEventListener("click", selectAnswer);
//       answerButtonsElement.appendChild(button);
//     });

//     document.getElementById("question-container").classList.remove("hide");
//   } else {
//     showResults();
//   }
// }

// function selectAnswer(event) {
//   const selectedButton = event.target;
//   const currentQuestion = shuffledQuizData[currentQuestionIndex];

//   if (selectedButton.textContent === currentQuestion.correctAnswer) {
//     selectedButton.classList.add("correct");
//     score++;
//   } else {
//     selectedButton.classList.add("wrong");
//   }

//   // Disable buttons after selecting an answer
//   answerButtonsElement.querySelectorAll(".btn").forEach((button) => {
//     button.disabled = true;
//   });

//   currentQuestionIndex++;

//   if (currentQuestionIndex < quizData.length) {
//     setTimeout(loadQuestion, 1000); // Delay to show the correct/wrong button color
//   } else {
//     setTimeout(showResults, 1000); // Delay to show the final score
//   }
// }

// function showResults() {
//   questionElement.textContent = "Quiz Completed!";
//   answerButtonsElement.innerHTML = "";
//   scoreElement.textContent = score + " out of " + numberOfQuestionsToShow;
//   resultsElement.classList.remove("hide");
  
//   startButton.classList.remove("hide"); // Show the Start Quiz button again
// }

// document.getElementById("start-button").addEventListener("click", startQuiz);












const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    answers: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: "Japan",
  },
  {
    question: "What is the chemical symbol for the element Gold?",
    answers: ["Au", "Ag", "Fe", "Cu"],
    correctAnswer: "Au",
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Saturn", "Neptune", "Mars"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: ["William Shakespeare", "Jane Austen", "Mark Twain", "Charles Dickens"],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Yuan", "Pound", "Euro", "Yen"],
    correctAnswer: "Yen",
  },
  {
    question: "Which famous scientist formulated the theory of relativity?",
    answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "What is the chemical symbol for the element Oxygen?",
    answers: ["O", "Ox", "Og", "Oy"],
    correctAnswer: "O",
  },
  {
    question: "Which river is the longest in the world?",
    answers: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
    correctAnswer: "Nile River",
  },
];

const numberOfQuestionsToShow = 6;

let shuffledQuizData = [];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resultsElement = document.getElementById("results");
const scoreElement = document.getElementById("score-value");
const startButton = document.getElementById("start-button");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  shuffledQuizData = quizData.slice();
  shuffleArray(shuffledQuizData);
  currentQuestionIndex = 0;
  score = 0;
  resultsElement.classList.add("hide");
  startButton.classList.add("hide");
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex < numberOfQuestionsToShow) {
    const currentQuestion = shuffledQuizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtonsElement.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("btn");
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });

    document.getElementById("question-container").classList.remove("hide");
  } else {
    showResults();
  }
}

function selectAnswer(event) {
  const selectedButton = event.target;
  const currentQuestion = shuffledQuizData[currentQuestionIndex];

  if (selectedButton.textContent === currentQuestion.correctAnswer) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  answerButtonsElement.querySelectorAll(".btn").forEach((button) => {
    button.disabled = true;
  });

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    setTimeout(loadQuestion, 1000);
  } else {
    setTimeout(showResults, 1000);
  }
}

function showResults() {
  questionElement.textContent = "Quiz Completed!";
  answerButtonsElement.innerHTML = "";
  scoreElement.textContent = score + " out of " + numberOfQuestionsToShow;
  resultsElement.classList.remove("hide");
  
  startButton.classList.remove("hide");
}

startButton.addEventListener("click", startQuiz);
