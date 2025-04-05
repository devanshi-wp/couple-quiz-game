const questions = [
    { q: "Do you remember your partner's birthday?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Do you like the same food?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Who apologizes first?", options: ["You", "Partner", "Both", "None"], answer: "Both" },
    { q: "Do you talk every day?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Do you trust each other?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Have you planned your future?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Do you remember your first meeting date?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Do you give each other gifts?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Who is more romantic?", options: ["You", "Partner", "Both"], answer: "Both" },
    { q: "Do you fight often?", options: ["Yes", "No", "Sometimes"], answer: "Sometimes" },
    { q: "Do you keep secrets?", options: ["Yes", "No"], answer: "No" },
    { q: "Who says 'I Love You' more?", options: ["You", "Partner", "Equal"], answer: "Equal" },
    { q: "Do you watch movies together?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Do you like each other's friends?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Have you ever gone on a trip together?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Who gets more jealous?", options: ["You", "Partner", "No one"], answer: "No one" },
    { q: "Do you support each other's goals?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Do you laugh together often?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Do you remember each other's favorite color?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Do you feel safe with each other?", options: ["Yes", "No"], answer: "Yes" }
  ];
  
  let currentQ = 0;
  let score = 0;
  
  const questionText = document.getElementById("question-text");
  const optionsBox = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const scoreText = document.getElementById("score-text");
  
  function loadQuestion() {
    const q = questions[currentQ];
    questionText.textContent = `Q${currentQ + 1}. ${q.q}`;
    optionsBox.innerHTML = "";
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === q.answer) score++;
        currentQ++;
        if (currentQ < questions.length) {
          loadQuestion();
        } else {
          showResult();
        }
      };
      optionsBox.appendChild(btn);
    });
  }
  
  function showResult() {
    document.getElementById("quiz-box").style.display = "none";
    resultBox.style.display = "block";
    const percent = Math.round((score / questions.length) * 100);
    scoreText.textContent = `You scored ${percent}%. ${
      percent >= 80 ? "Perfect Couple! 💖" :
      percent >= 50 ? "Good Match! 💕" :
      "Needs Work 💔"
    }`;
  }
  
  loadQuestion();
  