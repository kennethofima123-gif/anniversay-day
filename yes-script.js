<script>
// Run this when YES is clicked
function sayYes() {
  // Hide any question UI (if you have it)
  const questionBox = document.getElementById("question");
  if (questionBox) questionBox.style.display = "none";

  // Show YES screen/message
  const yesScreen = document.getElementById("yesScreen");
  if (yesScreen) {
    yesScreen.style.display = "block";
    yesScreen.classList.add("pop-in");
  }

  // Trigger hearts + confetti
  createHearts();
  createConfetti();

  // Optional: play sound if you want
  // let audio = new Audio("celebration.mp3");
  // audio.play();
}

// Floating hearts animation
function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (16 + Math.random() * 24) + "px";
    heart.style.animation = "floatUp 4s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

// Simple confetti effect
function createConfetti() {
  const colors = ["#ff4d6d", "#ff85a2", "#ffd1dc", "#ffffff"];

  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.opacity = "0.8";
    confetti.style.transform = "rotate(45deg)";

    confetti.style.animation = "fall 3s linear forwards";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
</script>
