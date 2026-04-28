// ===== ANNIVERSARY YES SCRIPT =====

// Main trigger when user clicks YES
function sayYes() {
  const questionBox = document.getElementById("question");
  const yesScreen = document.getElementById("yesScreen");

  // Hide question section
  if (questionBox) {
    questionBox.style.opacity = "0";
    questionBox.style.transform = "scale(0.8)";
    setTimeout(() => {
      questionBox.style.display = "none";
    }, 400);
  }

  // Show YES screen
  if (yesScreen) {
    yesScreen.style.display = "block";
    setTimeout(() => {
      yesScreen.classList.add("show");
    }, 50);
  }

  // Effects
  createHearts();
  createConfetti();
  typeMessage();
}

// 💖 Floating hearts
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (16 + Math.random() * 30) + "px";
    heart.style.opacity = "0.9";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    heart.style.animation = `floatUp ${3 + Math.random() * 2}s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}

// 🎉 Confetti burst
function createConfetti() {
  const colors = ["#ff4d6d", "#ff85a2", "#ffd1dc", "#ffffff", "#ffccd5"];

  for (let i = 0; i < 70; i++) {
    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.opacity = "0.8";
    confetti.style.zIndex = "9999";
    confetti.style.borderRadius = "2px";

    confetti.style.animation = `fall ${2.5 + Math.random() * 2}s linear forwards`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

// ✍️ Typing message reveal
function typeMessage() {
  const message = document.getElementById("finalMessage");
  if (!message) return;

  const text =
    "Three years with you feels like the best decision of my life. I’d choose you again, every time. ❤️";

  message.innerHTML = "";
  let i = 0;

  const typing = setInterval(() => {
    message.innerHTML += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(typing);
    }
  }, 40);
}
