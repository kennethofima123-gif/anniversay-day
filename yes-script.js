// عناصر الصفحة
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const title = document.querySelector("h1");

let noCount = 0;
let typingIndex = 0;

// 💬 Intro typing messages
const introText = "I have something important to ask you... ❤️";
function typeIntro() {
  if (typingIndex < introText.length) {
    message.textContent += introText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeIntro, 50);
  }
}

// Start typing effect
message.textContent = "";
typeIntro();

// 💔 Escalating messages
const messages = [
  "Are you sure? 😢",
  "Really sure? 🥺",
  "Think again 💔",
  "You're breaking my heart 💔",
  "This is getting serious 😤",
  "Please don't do this 😭",
  "I will keep asking forever 😈❤️"
];

// 🏃 Move NO button
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // spin + shrink
  noBtn.style.transform = `
    scale(${Math.max(0.5, 1 - noCount * 0.05)})
    rotate(${noCount * 15}deg)
  `;
}

// 😈 Resist "No"
noBtn.addEventListener("mouseover", () => {
  noCount++;

  if (noCount < messages.length) {
    message.textContent = messages[noCount];
  } else {
    message.textContent = "Okay you literally cannot press NO 😌❤️";
  }

  // YES button grows + glows
  yesBtn.style.transform = `scale(${1 + noCount * 0.15})`;
  yesBtn.style.boxShadow = `0 0 ${10 + noCount * 5}px rgba(255,77,109,0.8)`;

  // shake screen if كثيرة 😄
  if (noCount > 5) shakeScreen();

  moveNoButton();
});

// Prevent clicking NO
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// 💥 Screen shake effect
function shakeScreen() {
  document.body.style.transition = "transform 0.1s";

  let shakes = 0;
  const interval = setInterval(() => {
    document.body.style.transform =
      `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;

    shakes++;
    if (shakes > 10) {
      clearInterval(interval);
      document.body.style.transform = "translate(0,0)";
    }
  }, 50);
}

// 💖 YES CLICK → full experience
yesBtn.addEventListener("click", () => {
  playMusic();
  launchConfetti();
  createHearts();
  showFinalScene();
});

// 🎬 Final scene (story mode)
function showFinalScene() {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px; font-family:sans-serif;">
      <h1 style="color:#ff4d6d; font-size:3em;">Happy Anniversary ❤️</h1>
      <p style="font-size:1.5em;">You said YES 🥰</p>
      <p style="max-width:600px; margin:auto; font-size:1.2em;">
        Every moment with you has been a beautiful memory.
        From the first laugh to today, I would choose you again and again.
      </p>
      <p style="margin-top:20px;">I love you forever 💕</p>
    </div>
  `;
}

// 🎉 Confetti
function launchConfetti() {
  for (let i = 0; i < 150; i++) {
    const el = document.createElement("div");
    el.style.position = "fixed";
    el.style.width = "8px";
    el.style.height = "8px";
    el.style.background = randomColor();
    el.style.top = "-10px";
    el.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(el);

    let fall = setInterval(() => {
      let top = parseFloat(el.style.top);
      el.style.top = top + 6 + "px";

      if (top > window.innerHeight) {
        clearInterval(fall);
        el.remove();
      }
    }, 20);
  }
}

// 💕 Hearts
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    let rise = setInterval(() => {
      let bottom = parseFloat(heart.style.bottom);
      heart.style.bottom = bottom + 4 + "px";

      if (bottom > window.innerHeight) {
        clearInterval(rise);
        heart.remove();
      }
    }, 20);
  }, 250);
}

// 🎵 Music (replace with your file)
function playMusic() {
  const audio = new Audio("your-song.mp3"); // <-- put your file here
  audio.loop = true;
  audio.play();
}

// 🎨 Colors
function randomColor() {
  const colors = ["#ff4d6d", "#ff99ac", "#ffc2d1", "#ffccd5"];
  return colors[Math.floor(Math.random() * colors.length)];
}
