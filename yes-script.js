// عناصر الصفحة
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noClickCount = 0;

// رسائل تتغير مع كل محاولة ضغط "No"
const messages = [
  "Are you sure? 😢",
  "Really sure? 🥺",
  "Think again 💔",
  "Last chance 😭",
  "You’re breaking my heart 💔",
  "Okay this is getting serious 😤",
  "Please just click YES 😭❤️"
];

// حركة زر "No"
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // تأثيرات إضافية
  noBtn.style.transform = `scale(${1 - noClickCount * 0.05}) rotate(${noClickCount * 10}deg)`;
}

// عند محاولة الضغط على "No"
noBtn.addEventListener("mouseover", () => {
  noClickCount++;

  // تغيير النص
  if (noClickCount < messages.length) {
    message.textContent = messages[noClickCount];
  } else {
    message.textContent = "Just give up and press YES 😌❤️";
  }

  // تكبير زر "Yes"
  yesBtn.style.transform = `scale(${1 + noClickCount * 0.1})`;

  moveNoButton();
});

// عند الضغط على "Yes"
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px; font-family:sans-serif;">
      <h1 style="color:#ff4d6d; font-size:3em;">Happy Anniversary ❤️</h1>
      <p style="font-size:1.5em;">You said YES! 🥰</p>
      <p>I love you more every day 💕</p>
    </div>
  `;

  launchConfetti();
  createHearts();
});

// 🎉 Confetti effect
function launchConfetti() {
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.backgroundColor = randomColor();
    confetti.style.top = "-10px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.opacity = Math.random();

    document.body.appendChild(confetti);

    let fall = setInterval(() => {
      let top = parseFloat(confetti.style.top);
      confetti.style.top = top + 5 + "px";

      if (top > window.innerHeight) {
        clearInterval(fall);
        confetti.remove();
      }
    }, 20);
  }
}

// 💕 Floating hearts
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = Math.random();

    document.body.appendChild(heart);

    let rise = setInterval(() => {
      let bottom = parseFloat(heart.style.bottom);
      heart.style.bottom = bottom + 3 + "px";

      if (bottom > window.innerHeight) {
        clearInterval(rise);
        heart.remove();
      }
    }, 20);
  }, 300);
}

// 🎨 Random color generator
function randomColor() {
  const colors = ["#ff4d6d", "#ff99ac", "#ffc2d1", "#ffccd5", "#fff0f3"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Optional: click "No" still moves (extra evil 😄)
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});
