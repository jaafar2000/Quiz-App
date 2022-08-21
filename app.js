let quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let currentQuiz = 0;
let score = 0;

let quiz = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
let questionEl = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");
let nextBtn = document.querySelector(".next");
let previosBtn = document.querySelector(".back");
let test = document.querySelector(".test");
let showAnswer = document.querySelector(".showAnswer");

// load first question
loadQuiz();

// function
function loadQuiz() {
  // call  deselectAnswers() to deselect the Answers
  deselectAnswers();
  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = `${currentQuiz + 1} - ${currentQuizData.question}`;
  a_text.innerText = `(a)- ${currentQuizData.a}`;
  b_text.innerText = `(b)- ${currentQuizData.b}`;
  c_text.innerText = `(c)- ${currentQuizData.c}`;
  d_text.innerText = `(d)- ${currentQuizData.d}`;
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    } else {
      test.innerHTML = "Select answer first!";
      test.style.color = "#ff0000bd";
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
showAnswer.addEventListener("click", function () {
  showAnswer.innerHTML = `${quizData[currentQuiz].correct}`;
});
submitBtn.addEventListener("click", () => {
  // check to see the answer
  let answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
      test.innerHTML = "test";
      test.style.color = "transparent";
      showAnswer.innerHTML = "Show Answer";
    } else {
      quiz.style.textAlign = "center";
      if (score >= quizData.length) {
        quiz.style.color = "green";
      } else {
        quiz.style.color = "red";
      }

      quiz.innerHTML = `
							<h4>You answered correctly at <span> ${score}/${quizData.length} </span> questions.</h4>
							
							<button onclick="location.reload()">Reload</button>
					`;
    }
  }
});
