"use strict";

const STORAGE_KEY = "genaiLearningJourney.v1";

const phases = [
  {
    title: "Programming Foundations",
    subtitle: "Python, Git, problem solving and developer tools",
    goal: "Become comfortable writing, reading, debugging and organising Python programs.",
    project: "Python Productivity Toolkit",
    days: [
      "Set up your learning workspace", "Understand how the internet and code work",
      "Install and explore Python", "Your first Python program", "Variables and data types",
      "Strings and string methods", "Numbers and operators", "Lists and list operations",
      "Tuples, sets and dictionaries", "Conditions and Boolean logic",
      "For loops and iteration", "While loops and control flow",
      "Functions and parameters", "Return values and scope",
      "Practice: build a calculator", "Solve beginner Python exercises",
      "Understand errors and tracebacks", "Exception handling",
      "Read and write text files", "Organise code into modules",
      "Use pip and virtual environments", "Understand JSON data",
      "Work with dates and times", "List and dictionary comprehensions",
      "Basic object-oriented programming", "Classes, objects and methods",
      "Debug with print and breakpoints", "Learn Git and version control",
      "Push your first repository to GitHub", "Build and review your Python toolkit"
    ]
  },
  {
    title: "APIs, Data and ML Basics",
    subtitle: "HTTP, JSON, data handling and machine learning concepts",
    goal: "Connect programs to external services and understand the fundamentals of data and machine learning.",
    project: "Data Explorer Application",
    days: [
      "Understand HTTP and the request-response cycle", "Explore REST API concepts",
      "Make your first GET request", "Understand status codes and headers",
      "Parse JSON from an API", "Handle API errors and timeouts",
      "Query parameters and URL construction", "Use environment variables for configuration",
      "Learn API authentication concepts", "Practise with a public API",
      "Read CSV files with Python", "Explore tabular data with pandas",
      "Clean missing and duplicate values", "Filter, sort and group data",
      "Calculate summary statistics", "Create basic charts",
      "Understand datasets and features", "Learn supervised and unsupervised learning",
      "Understand training and test data", "Explore regression",
      "Explore classification", "Understand clustering",
      "Learn overfitting and underfitting", "Evaluate model predictions",
      "Explore scikit-learn basics", "Build a simple prediction model",
      "Save and reload a model", "Write tests for data code",
      "Document API and data workflows", "Build your data explorer"
    ]
  },
  {
    title: "LLMs and Prompt Engineering",
    subtitle: "Transformers, tokens, prompts and model evaluation",
    goal: "Understand how language models work and build reliable applications around model outputs.",
    project: "AI Research and Study Assistant",
    days: [
      "Understand Generative AI and LLMs", "Explore common GenAI use cases",
      "Learn tokens and context windows", "Understand embeddings conceptually",
      "Explore transformer architecture at a high level", "Understand pretraining and fine-tuning",
      "Compare hosted and open-weight models", "Learn model strengths and limitations",
      "Write clear zero-shot prompts", "Practise few-shot prompting",
      "Add role, context and constraints", "Request structured JSON outputs",
      "Break tasks into smaller prompt steps", "Create reusable prompt templates",
      "Evaluate answer accuracy", "Test prompts against edge cases",
      "Reduce hallucinations with grounding", "Design a text summariser",
      "Build a question-answering prompt", "Create a text classification workflow",
      "Understand temperature and output limits", "Compare responses across models",
      "Handle refusals and unsafe requests", "Protect sensitive information in prompts",
      "Use an API key safely", "Make a model API call if free access is available",
      "Add retries and error handling", "Track model costs and latency",
      "Write prompt evaluation examples", "Build your AI study assistant"
    ]
  },
  {
    title: "Embeddings, RAG and Evaluation",
    subtitle: "Semantic search, retrieval, document processing and grounding",
    goal: "Build applications that answer questions using relevant information from supplied documents.",
    project: "Document Question-Answering App",
    days: [
      "Understand why retrieval is useful", "Learn semantic search concepts",
      "Understand embedding vectors", "Compare keyword and semantic search",
      "Explore cosine similarity conceptually", "Prepare a small document collection",
      "Extract text from plain text files", "Explore PDF text extraction",
      "Clean and normalise document text", "Split documents into chunks",
      "Experiment with chunk size", "Understand metadata and source tracking",
      "Create embeddings with an available model", "Compare local and hosted embeddings",
      "Store vectors in a simple index", "Explore a vector database",
      "Retrieve the most relevant chunks", "Rank and filter retrieved results",
      "Build a retrieval-only prototype", "Pass retrieved context to an LLM",
      "Ask questions against your documents", "Show source references in answers",
      "Handle questions with no good evidence", "Test retrieval quality",
      "Evaluate grounded answer quality", "Check for prompt injection in documents",
      "Protect private documents and secrets", "Improve chunking and retrieval",
      "Add error handling and tests", "Build and document your RAG application"
    ]
  },
  {
    title: "AI Agents and Application Development",
    subtitle: "Tool use, workflows, interfaces, testing and observability",
    goal: "Create useful AI-powered applications with controlled tools and predictable workflows.",
    project: "AI Workflow Assistant",
    days: [
      "Understand AI agents versus chatbots", "Learn tool calling concepts",
      "Design a tool schema", "Create a safe calculator tool",
      "Validate tool inputs", "Return structured tool results",
      "Understand the agent decision loop", "Build a simple tool-using assistant",
      "Add a limit to tool iterations", "Handle tool failures safely",
      "Learn workflow orchestration patterns", "Compare deterministic workflows and agents",
      "Explore function calling patterns", "Design an approval step for risky actions",
      "Understand memory and conversation history", "Summarise long conversations",
      "Use retrieval as an agent tool", "Create a multi-step workflow",
      "Understand agent frameworks conceptually", "Explore one framework tutorial",
      "Build a Python backend for an AI app", "Create a simple Streamlit interface",
      "Validate user input", "Keep secrets out of source code",
      "Write unit tests for tools", "Test failure and timeout scenarios",
      "Add structured logs", "Measure latency and response quality",
      "Review privacy and security risks", "Build your AI workflow assistant"
    ]
  },
  {
    title: "Capstone, Deployment and Career Readiness",
    subtitle: "Production thinking, deployment, documentation and interview practice",
    goal: "Polish a complete GenAI application and demonstrate your understanding through clear documentation.",
    project: "GenAI Capstone Application",
    days: [
      "Choose a capstone problem", "Define users and success criteria",
      "Write the capstone project specification", "Draw the application architecture",
      "Choose models and tools with free options in mind", "Set up the repository structure",
      "Implement the core backend", "Design prompts and structured outputs",
      "Add retrieval if your use case needs it", "Implement validation and error handling",
      "Build the user interface", "Connect the interface and backend",
      "Add loading and error states", "Create a small evaluation dataset",
      "Test factuality and output quality", "Test invalid and adversarial inputs",
      "Review privacy and secret handling", "Measure latency and usage",
      "Improve weak responses", "Write automated tests",
      "Prepare a requirements file", "Add environment configuration",
      "Explore deployment options and their limits", "Deploy using an available free option",
      "Test the deployed application", "Write a clear README",
      "Add architecture and usage diagrams", "Record a demo or screenshots",
      "Practise GenAI interview questions", "Review, reflect and plan your next steps"
    ]
  }
];

const phaseColors = ["teal", "blue", "gold", "purple", "green", "teal"];

const projects = [
  {
    title: "Python Productivity Toolkit",
    phase: "Month 1",
    description: "A collection of small Python utilities that demonstrate clean code, file handling and debugging.",
    features: ["Input validation", "JSON and file operations", "Tests and README"],
    day: 30
  },
  {
    title: "Data Explorer Application",
    phase: "Month 2",
    description: "Explore a dataset or public API, clean the data and present useful findings.",
    features: ["API integration", "Data cleaning", "Charts and summaries"],
    day: 60
  },
  {
    title: "AI Research and Study Assistant",
    phase: "Month 3",
    description: "A study helper that summarises text, answers questions and produces structured notes.",
    features: ["Prompt templates", "Structured output", "Evaluation examples"],
    day: 90
  },
  {
    title: "Document Question-Answering App",
    phase: "Month 4",
    description: "Ask questions about a small document collection and show supporting source references.",
    features: ["Document chunking", "Retrieval and grounding", "Source citations"],
    day: 120
  },
  {
    title: "AI Workflow Assistant",
    phase: "Month 5",
    description: "A controlled workflow that calls useful tools, validates inputs and handles failures.",
    features: ["Tool calling", "Input validation", "Logs and tests"],
    day: 150
  },
  {
    title: "GenAI Capstone Application",
    phase: "Month 6",
    description: "A polished end-to-end AI application with a clear use case, tests and deployment documentation.",
    features: ["Working application", "Evaluation and safety", "Demo and README"],
    day: 180
  }
];

// --------------------------------------------------
// STATE AND STORAGE
// --------------------------------------------------

function emptyState() {
  return {
    selectedDay: 1,
    taskChecks: {},
    completedDays: {},
    projectChecks: {},
    theme: "dark"
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return emptyState();

    const parsed = JSON.parse(saved);

    return {
      ...emptyState(),
      ...parsed,
      taskChecks: parsed.taskChecks || {},
      completedDays: parsed.completedDays || {},
      projectChecks: parsed.projectChecks || {}
    };
  } catch (error) {
    console.warn("Could not load saved learning progress.", error);
    return emptyState();
  }
}

const state = loadState();

let selectedDay = Math.min(
  180,
  Math.max(1, Number(state.selectedDay) || 1)
);

let activeMonth = "all";

function saveState() {
  state.selectedDay = selectedDay;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Progress could not be saved in this browser.", error);
  }
}

// --------------------------------------------------
// DAY AND TASK HELPERS
// --------------------------------------------------

function getDay(dayNumber) {
  const phaseIndex = Math.floor((dayNumber - 1) / 30);
  const dayInPhase = (dayNumber - 1) % 30;
  const phase = phases[phaseIndex];
  const title = phase.days[dayInPhase];
  const week = Math.floor(dayInPhase / 7) + 1;
  const dayOfWeek = (dayInPhase % 7) + 1;

  return {
    number: dayNumber,
    phaseIndex,
    phase,
    title,
    week,
    dayOfWeek,
    description: `${phase.goal} Today's focus: ${title.toLowerCase()}. Aim to finish with a working example, useful notes, or a small commit.`
  };
}

function taskDefinitions(day) {
  return [
    {
      id: "learn",
      title: "Learn the concept",
      duration: "60 min",
      description: `Study ${day.title.toLowerCase()} using the relevant free documentation or course. Write down five important ideas and one question to investigate.`
    },
    {
      id: "practice",
      title: "Hands-on practice",
      duration: "90 min",
      description: `Write code or complete an exercise related to ${day.title.toLowerCase()}. Test your result, explore one edge case, and save your work locally.`
    },
    {
      id: "review",
      title: "Review and document",
      duration: "30 min",
      description: "Summarise what you learned, record anything confusing, and save a short example or commit your progress to Git."
    }
  ];
}

function isTaskChecked(dayNumber, taskId) {
  return Boolean(state.taskChecks[`${dayNumber}:${taskId}`]);
}

// A day is complete only when all three tasks are checked.
function isDayComplete(dayNumber) {
  return taskDefinitions(getDay(dayNumber)).every(task =>
    isTaskChecked(dayNumber, task.id)
  );
}

// Day 1 is available initially.
// Every other day requires the previous day to be complete.
function isDayUnlocked(dayNumber) {
  if (dayNumber === 1) return true;
  if (dayNumber < 1 || dayNumber > 180) return false;

  return isDayComplete(dayNumber - 1);
}

// Find the furthest day the learner can access.
function getHighestUnlockedDay() {
  let dayNumber = 1;

  while (
    dayNumber < 180 &&
    isDayUnlocked(dayNumber + 1)
  ) {
    dayNumber++;
  }

  return dayNumber;
}

// --------------------------------------------------
// TASK CHECKING AND SEQUENTIAL UNLOCKING
// --------------------------------------------------

function setTaskChecked(dayNumber, taskId, checked) {
  // Never allow edits to locked days.
  if (!isDayUnlocked(dayNumber)) return;

  const key = `${dayNumber}:${taskId}`;

  if (checked) {
    state.taskChecks[key] = true;
  } else {
    delete state.taskChecks[key];
  }

  if (isDayComplete(dayNumber)) {
    if (!state.completedDays[dayNumber]) {
      state.completedDays[dayNumber] = {
        completedAt: new Date().toISOString()
      };
    }
  } else {
    delete state.completedDays[dayNumber];

    // If an earlier day becomes incomplete, clear progress
    // for every later day so the sequence remains consistent.
    for (let day = dayNumber + 1; day <= 180; day++) {
      delete state.completedDays[day];

      for (const task of taskDefinitions(getDay(day))) {
        delete state.taskChecks[`${day}:${task.id}`];
      }
    }

    // Return the learner to the earliest newly locked day.
    selectedDay = Math.min(selectedDay, dayNumber);
  }

  saveState();
  renderAll();
}

// --------------------------------------------------
// DAILY LEARNING PLAN
// --------------------------------------------------


function renderDailyPlan() {
  const day = getDay(selectedDay);
  const unlocked = isDayUnlocked(day.number);

  document.getElementById("dayBadge").textContent =
    `DAY ${day.number} · MONTH ${day.phaseIndex + 1}`;

  document.getElementById("dailyTitle").textContent = day.title;
  document.getElementById("dailyDescription").textContent = day.description;
  document.getElementById("dailyPhase").textContent = day.phase.title;

  const taskList = document.getElementById("taskList");
  taskList.replaceChildren();

  taskDefinitions(day).forEach(task => {
    const label = document.createElement("label");
    label.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isTaskChecked(day.number, task.id);
    checkbox.disabled = !unlocked;
    checkbox.setAttribute("aria-label", task.title);

    checkbox.addEventListener("change", () => {
      setTaskChecked(day.number, task.id, checkbox.checked);
    });

    const content = document.createElement("div");
    content.className = "task-content";

    const title = document.createElement("strong");
    title.textContent = task.title;

    const description = document.createElement("p");
    description.textContent = task.description;

    content.append(title, description);

    const duration = document.createElement("span");
    duration.className = "task-duration";
    duration.textContent = task.duration;

    label.append(checkbox, content, duration);
    taskList.append(label);
  });

  // MY LEARNING NOTES
  // Remove the previous notes section before creating the selected day's section.
  document.getElementById("learningNotesSection")?.remove();

  const notesSection = document.createElement("section");
  notesSection.id = "learningNotesSection";
  notesSection.className = "learning-notes";

  const notesHeading = document.createElement("h3");
  notesHeading.className = "learning-notes-title";
  notesHeading.textContent = "My Learning Notes";

  const notesDescription = document.createElement("p");
  notesDescription.className = "learning-notes-description";
  notesDescription.textContent =
    `Day ${day.number} · ${day.title}. Record important concepts, code examples, questions, and your daily learnings in your journal.`;

  const notesButton = document.createElement("a");
  notesButton.className = "read-notes-button";
  notesButton.href =
    "https://docs.google.com/document/d/1iYo_y3BpG_wlT69xMUyMTBwlICrw4lv0MhLCQekc4CI/edit?usp=sharing";
  notesButton.target = "_blank";
  notesButton.rel = "noopener noreferrer";
  notesButton.textContent = "Read Notes ↗";
  notesButton.setAttribute(
    "aria-label",
    `Open your Google Docs learning notes for Day ${day.number}`
  );

  notesSection.append(
    notesHeading,
    notesDescription,
    notesButton
  );

  taskList.after(notesSection);

  // EXISTING DAILY PROGRESS LOGIC
  const checkedCount = taskDefinitions(day).filter(task =>
    isTaskChecked(day.number, task.id)
  ).length;

  document.getElementById("dailyTaskCount").textContent =
    `${checkedCount} of 3 tasks complete`;

  const completeButton = document.getElementById("completeDayButton");

  completeButton.textContent = isDayComplete(day.number)
    ? "Day completed ✓"
    : "Complete day ✓";

  // Tasks alone determine completion; the button cannot bypass them.
  completeButton.disabled = !unlocked || !isDayComplete(day.number);

  document.getElementById("previousDay").disabled =
    selectedDay === 1;

  document.getElementById("nextDay").disabled =
    selectedDay >= getHighestUnlockedDay();
}


// --------------------------------------------------
// ROADMAP AND DAY BUTTONS
// --------------------------------------------------

function renderRoadmap() {
  const grid = document.getElementById("roadmapGrid");
  grid.replaceChildren();

  phases.forEach((phase, phaseIndex) => {
    if (activeMonth !== "all" && Number(activeMonth) !== phaseIndex) {
      return;
    }

    const start = phaseIndex * 30 + 1;

    const completedCount = phase.days.filter((_, index) =>
      isDayComplete(start + index)
    ).length;

    const card = document.createElement("article");
    card.className = "month-card";

    const header = document.createElement("div");
    header.className = "month-header";

    const info = document.createElement("div");

    const kicker = document.createElement("span");
    kicker.className = "month-kicker";
    kicker.textContent =
      `MONTH ${phaseIndex + 1} · DAYS ${start}–${start + 29}`;

    const title = document.createElement("h3");
    title.textContent = phase.title;

    const subtitle = document.createElement("p");
    subtitle.textContent = phase.subtitle;

    const track = document.createElement("div");
    track.className = "progress-track";

    const fill = document.createElement("div");
    fill.className = "progress-fill";
    fill.style.width = `${completedCount / 30 * 100}%`;

    track.append(fill);
    info.append(kicker, title, subtitle, track);

    const percent = document.createElement("span");
    percent.className = "month-percent";
    percent.textContent =
      `${Math.round(completedCount / 30 * 100)}%`;

    header.append(info, percent);

    const dayGrid = document.createElement("div");
    dayGrid.className = "day-grid";

    phase.days.forEach((titleText, index) => {
      const dayNumber = start + index;
      const button = document.createElement("button");

      const unlocked = isDayUnlocked(dayNumber);
      const completed = isDayComplete(dayNumber);

      button.className = "day-button";

      button.textContent = unlocked
        ? `Day ${dayNumber}`
        : `🔒 Day ${dayNumber}`;

      button.title = unlocked
        ? titleText
        : `Locked — complete Day ${dayNumber - 1} first`;

      button.setAttribute(
        "aria-label",
        unlocked
          ? `Day ${dayNumber}: ${titleText}`
          : `Day ${dayNumber}: locked. Complete Day ${dayNumber - 1} first.`
      );

      button.disabled = !unlocked;

      if (!unlocked) button.classList.add("locked");
      if (selectedDay === dayNumber) button.classList.add("selected");
      if (completed) button.classList.add("done");

      button.addEventListener("click", () => {
        if (!isDayUnlocked(dayNumber)) return;

        selectedDay = dayNumber;
        saveState();
        renderAll();

        document.getElementById("today").scrollIntoView({
          behavior: "smooth"
        });
      });

      dayGrid.append(button);
    });

    card.append(header, dayGrid);
    grid.append(card);
  });
}

// --------------------------------------------------
// PROJECT TRACKER
// --------------------------------------------------

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.replaceChildren();

  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = `PROJECT 0${index + 1}`;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const features = document.createElement("ul");

    project.features.forEach(feature => {
      const item = document.createElement("li");
      item.textContent = feature;
      features.append(item);
    });

    const footer = document.createElement("div");
    footer.className = "project-footer";

    const label = document.createElement("label");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = Boolean(state.projectChecks[index]);
    checkbox.setAttribute(
      "aria-label",
      `Mark ${project.title} complete`
    );

    checkbox.addEventListener("change", () => {
      state.projectChecks[index] = checkbox.checked;
      saveState();
      renderAll();
    });

    label.append(checkbox, document.createTextNode(" Completed"));

    const phase = document.createElement("span");
    phase.className = "project-phase";
    phase.textContent = project.phase;

    footer.append(label, phase);
    card.append(number, title, description, features, footer);
    grid.append(card);
  });
}

// --------------------------------------------------
// DASHBOARD STATISTICS
// --------------------------------------------------

function getCompletedCount() {
  let count = 0;

  for (let day = 1; day <= 180; day++) {
    if (isDayComplete(day)) count++;
  }

  return count;
}

function getStreaks() {
  const completedDates = new Set(
    Object.values(state.completedDays)
      .map(value => value && value.completedAt)
      .filter(Boolean)
      .map(value => new Date(value).toLocaleDateString("en-CA"))
  );

  const today = new Date();
  const dateKey = date => date.toLocaleDateString("en-CA");

  const shiftDate = (date, amount) => {
    const next = new Date(date);
    next.setDate(next.getDate() + amount);
    return next;
  };

  let current = 0;
  let cursor = new Date(today);

  if (!completedDates.has(dateKey(cursor))) {
    cursor = shiftDate(cursor, -1);
  }

  while (completedDates.has(dateKey(cursor)) && current < 3650) {
    current++;
    cursor = shiftDate(cursor, -1);
  }

  let best = 0;
  let run = 0;
  const sorted = [...completedDates].sort();
  let previous = null;

  for (const key of sorted) {
    const date = new Date(`${key}T12:00:00`);
    const previousDate = previous
      ? new Date(`${previous}T12:00:00`)
      : null;

    const diff = previousDate
      ? Math.round((date - previousDate) / 86400000)
      : 0;

    run = previous && diff === 1 ? run + 1 : 1;
    best = Math.max(best, run);
    previous = key;
  }

  return { current, best, completedDates };
}

function renderStats() {
  const completed = getCompletedCount();
  const streaks = getStreaks();

  const projectsDone = projects.filter((_, index) =>
    state.projectChecks[index]
  ).length;

  document.getElementById("progressPercent").textContent =
    `${Math.round(completed / 180 * 100)}%`;

  document.getElementById("overallBar").style.width =
    `${completed / 180 * 100}%`;

  document.getElementById("completedLabel").textContent =
    `${completed} of 180 days completed`;

  document.getElementById("streakCount").textContent =
    streaks.current;

  document.getElementById("bestStreakLabel").textContent =
    `Best streak: ${streaks.best} days`;

  document.getElementById("hoursCount").textContent =
    completed * 3;

  document.getElementById("projectCount").textContent =
    `${projectsDone} / 6`;
}

// --------------------------------------------------
// CALENDAR
// --------------------------------------------------

function renderCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.replaceChildren();

  const { completedDates } = getStreaks();
  const today = new Date();
  const start = new Date(today);

  start.setDate(start.getDate() - 83);

  for (let index = 0; index < 84; index++) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);

    const key = date.toLocaleDateString("en-CA");
    const cell = document.createElement("button");

    cell.className = "calendar-cell";
    cell.title = `${key}: ${
      completedDates.has(key)
        ? "Study completed"
        : "No completed study recorded"
    }`;

    cell.setAttribute("aria-label", cell.title);

    if (completedDates.has(key)) cell.classList.add("level-4");

    if (date.toDateString() === today.toDateString()) {
      cell.classList.add("today");
    }

    calendar.append(cell);
  }
}

// --------------------------------------------------
// PHASE PROGRESS
// --------------------------------------------------

function renderPhaseProgress() {
  const container = document.getElementById("phaseProgress");
  container.replaceChildren();

  phases.forEach((phase, index) => {
    const start = index * 30 + 1;

    const count = phase.days.filter((_, dayIndex) =>
      isDayComplete(start + dayIndex)
    ).length;

    const row = document.createElement("div");
    row.className = "phase-row";

    const top = document.createElement("div");
    top.className = "phase-row-top";

    const label = document.createElement("span");
    label.textContent = `M${index + 1} · ${phase.title}`;

    const percent = document.createElement("span");
    percent.textContent = `${count}/30`;

    const track = document.createElement("div");
    track.className = "progress-track";

    const fill = document.createElement("div");
    fill.className = "progress-fill";
    fill.style.width = `${count / 30 * 100}%`;

    top.append(label, percent);
    track.append(fill);
    row.append(top, track);
    container.append(row);
  });
}

// --------------------------------------------------
// THEME
// --------------------------------------------------

function renderTheme() {
  document.body.classList.toggle(
    "light-theme",
    state.theme === "light"
  );

  document.getElementById("themeButton").textContent =
    state.theme === "light" ? "☾" : "☼";
}

// --------------------------------------------------
// RENDER EVERYTHING
// --------------------------------------------------

function renderAll() {
  // Never leave the learner viewing a locked day.
  selectedDay = Math.min(
    selectedDay,
    getHighestUnlockedDay()
  );

  renderDailyPlan();
  renderRoadmap();
  renderProjects();
  renderStats();
  renderCalendar();
  renderPhaseProgress();
  renderTheme();
}

// --------------------------------------------------
// DAILY NAVIGATION
// --------------------------------------------------

document.getElementById("previousDay").addEventListener("click", () => {
  if (selectedDay <= 1) return;

  selectedDay--;
  saveState();
  renderAll();
});

document.getElementById("nextDay").addEventListener("click", () => {
  if (selectedDay >= getHighestUnlockedDay()) return;

  selectedDay++;
  saveState();
  renderAll();
});

document.getElementById("completeDayButton").addEventListener("click", () => {
  if (!isDayUnlocked(selectedDay)) return;

  if (!isDayComplete(selectedDay)) {
    alert("Complete all three daily tasks before marking the day complete.");
    return;
  }

  state.completedDays[selectedDay] = {
    completedAt: new Date().toISOString()
  };

  saveState();
  renderAll();
});

// --------------------------------------------------
// MONTH FILTER
// --------------------------------------------------

document.getElementById("monthFilter").addEventListener("change", event => {
  activeMonth = event.target.value;
  renderRoadmap();
});

// --------------------------------------------------
// THEME TOGGLE
// --------------------------------------------------

document.getElementById("themeButton").addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  saveState();
  renderTheme();
});

// --------------------------------------------------
// RESET ALL PROGRESS
// --------------------------------------------------

document.getElementById("resetButton").addEventListener("click", () => {
  const confirmed = confirm(
    "Reset all learning progress, task checklists, streaks and project completions? This cannot be undone."
  );

  if (!confirmed) return;

  const fresh = emptyState();

  Object.keys(state).forEach(key => delete state[key]);
  Object.assign(state, fresh);

  selectedDay = 1;
  activeMonth = "all";

  document.getElementById("monthFilter").value = "all";

  saveState();
  renderAll();
});

// --------------------------------------------------
// CONTACT FORM
// --------------------------------------------------

// If your current HTML uses Formspree, allow its native form
// submission. The form's action and field names must be correct.
// This fallback supports the older email-app form if those fields exist.

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const isFormspree = contactForm.action.includes("formspree.io");

  const legacyFields = [
    document.getElementById("contactName"),
    document.getElementById("contactEmail"),
    document.getElementById("contactTopic"),
    document.getElementById("contactSubject"),
    document.getElementById("contactMessage"),
    document.getElementById("contactStatus")
  ];

  const hasLegacyFields = legacyFields.every(Boolean);

  if (!isFormspree && hasLegacyFields) {
    const [
      nameInput,
      emailInput,
      topicSelect,
      subjectInput,
      messageInput,
      status
    ] = legacyFields;

    topicSelect.addEventListener("change", () => {
      if (topicSelect.value && !subjectInput.value.trim()) {
        subjectInput.value = topicSelect.value;
      }
    });

    contactForm.addEventListener("submit", event => {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const topic = topicSelect.value;
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !topic || !subject || !message) {
        status.textContent = "Please complete all fields.";
        return;
      }

      const recipient = "charithasri654@gmail.com";

      const body = [
        `Name: ${name}`,
        `Reply-to email: ${email}`,
        `Query category: ${topic}`,
        "",
        "Message:",
        message
      ].join("\n");

      const mailto =
        `mailto:${recipient}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      status.textContent =
        "Opening your email application. Review your message and press Send.";

      window.location.href = mailto;
    });
  }
}

// --------------------------------------------------
// INITIALISE WEBSITE
// --------------------------------------------------

renderAll();