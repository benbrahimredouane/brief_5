let quizData = [];
let currentQuestion = 0;
let score = 0; 

// take data from JSON file
async function loadQuiz() {
  const res = await fetch('quiz.json');
  quizData = await res.json();
  showQuestion();
}

// Show a question
function showQuestion() {
  const questionElement = document.getElementById('question');
  const buttons = [
    document.getElementById('q1'),
    document.getElementById('q2'),
    document.getElementById('q3'),
    document.getElementById('q4')
  ];

  const current = quizData[currentQuestion];
  questionElement.textContent = current.question;

  // Enable button texts
  buttons.forEach((btn, index) => {
    btn.textContent = current.options[index];
    btn.style.background = "#1f2937";
    btn.disabled = false; 
    btn.onclick = () => checkAnswer(btn, current.answer);
  });
}

// Check if answer is correct
function checkAnswer(selectedBtn, correctAnswer) {
  const buttons = [
    document.getElementById('q1'),
    document.getElementById('q2'),
    document.getElementById('q3'),
    document.getElementById('q4')
  ];

  // Disable all buttons after selecting
  buttons.forEach(btn => btn.disabled = true);

  // Check correctness
  if (selectedBtn.textContent === correctAnswer) {
    selectedBtn.style.backgroundColor = 'green';
    score++; 
  } else {
    selectedBtn.style.backgroundColor = 'red';
    
    buttons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.style.backgroundColor = 'green';
      }
    });
  }
}

// Move to next question
document.getElementById('nextquestion').addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    // show result
    document.getElementById('section').innerHTML = `
      <h3 class="text-3xl font-bold text-green-400">Quiz Finished 🎉</h3>
      <p class="mt-4 text-lg">You scored <span class="text-yellow-400">${score}</span> out of <span class="text-yellow-400">${quizData.length}</span>.</p>
    `;
  }
});

// Start when page loads
loadQuiz();
