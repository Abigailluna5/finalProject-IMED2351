let clickCount = 0;
let messages = [];

// Load messages from text file
fetch("messages.txt")
  .then(response => response.text())
  .then(data => {
      messages = data.split("\n");
  });

// DOM elements
const messageBtn = document.getElementById("messageBtn");
const messageDisplay = document.getElementById("messageDisplay");
const clickCountDisplay = document.getElementById("clickCountDisplay");
const moodSelect = document.getElementById("moodSelect");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

// Greeting function
nameInput.addEventListener("input", () => {
    greeting.textContent = nameInput.value
        ? `Hi, ${nameInput.value}!☆o(≧▽≦)o☆`
        : "";
});

// Generate positivity message
function generateMessage() {
    if (messages.length === 0) return;

    clickCount++;

    const randomIndex = Math.floor(Math.random() * messages.length);
    messageDisplay.textContent = messages[randomIndex];

    clickCountDisplay.textContent = `You’ve clicked ${clickCount} times ✨`;

    updateMoodTheme();
}

messageBtn.addEventListener("click", generateMessage);

// Mood theme changer
function updateMoodTheme() {
    const mood = moodSelect.value;

    if (mood === "happy") {
        document.body.style.background = "linear-gradient(135deg, #ffe0f7, #e3ffe8)";
    } 
    else if (mood === "tired") {
        document.body.style.background = "linear-gradient(135deg, #dcd6ff, #f7e7ff)";
    } 
    else if (mood === "stressed") {
        document.body.style.background = "linear-gradient(135deg, #ffd6d6, #fff0d6)";
    } 
    else if (mood === "sad") {
        document.body.style.background = "linear-gradient(135deg, #d6e9ff, #e8d6ff)";
    } 
    else {
        document.body.style.background = "linear-gradient(135deg, #ffd6e8, #d7e8ff, #fff3b0)";
    }
}
