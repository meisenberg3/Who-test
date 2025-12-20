// ---- STATE ----
const steps = [
  {
    title: "Values",
    prompt: "When have you been most proud of yourself? Why?",
    key: "values"
  },
  {
    title: "Pillars",
    prompt: "When were you happiest and most 'you'? What traits showed up?",
    key: "pillars"
  },
  {
    title: "Ideal Emotion",
    prompt: "What emotion do you want to feel most days?",
    key: "emotion"
  },
  {
    title: "Trigger",
    prompt: "Complete the sentence: I'm not ____.",
    key: "trigger"
  }
];

let stepIndex = 0;
let state = {
  values: "",
  pillars: "",
  emotion: "",
  trigger: ""
};

// ---- ELEMENTS ----
const landing = document.getElementById("landing");
const app = document.getElementById("app");
const results = document.getElementById("results");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const stepTitle = document.getElementById("stepTitle");
const stepPrompt = document.getElementById("stepPrompt");
const inputBox = document.getElementById("inputBox");
const resultsText = document.getElementById("resultsText");

// ---- START ----
startBtn.addEventListener("click", () => {
  landing.hidden = true;
  app.hidden = false;
  stepIndex = 0;
  renderStep();
});

// ---- NEXT ----
nextBtn.addEventListener("click", () => {
  const key = steps[stepIndex].key;
  state[key] = inputBox.value.trim();

  stepIndex++;

  if (stepIndex < steps.length) {
    renderStep();
  } else {
    showResults();
  }
});

// ---- RESTART ----
restartBtn.addEventListener("click", () => {
  state = { values:"", pillars:"", emotion:"", trigger:"" };
  results.hidden = true;
  landing.hidden = false;
});

// ---- FUNCTIONS ----
function renderStep() {
  const step = steps[stepIndex];
  stepTitle.textContent = step.title;
  stepPrompt.textContent = step.prompt;
  inputBox.value = state[step.key] || "";
}

function showResults() {
  app.hidden = true;
  results.hidden = false;

  resultsText.textContent =
`VALUES:
${state.values}

PILLARS:
${state.pillars}

IDEAL EMOTION:
${state.emotion}

TRIGGER:
${state.trigger}
`;
}
