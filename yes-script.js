// عناصر الصفحة
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noCount = 0;
let yesUnlocked = false;

// 🔒 Lock YES initially
yesBtn.style.opacity = "0.6";
yesBtn.style.cursor = "not-allowed";

// 💬 Messages
const noMessages = [
  "Hmm... try again 😏",
  "Are you sure? 😢",
  "You can't escape this 😈",
  "Getting closer... 👀",
  "Almost there... 💕",
  "Okay fine... one more 😌"
];

const blockedYesMessages = [
  "Hey! Not so fast 😤",
  "You gotta earn that YES 😌",
  "Try pressing NO first 😏",
  "Don't skip the story 😢❤️"
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

  // shrink + rotate
  noBtn.style.transform =
    `scale(${Math.max(0.5, 1 - noCount * 0.05)})
     rotate(${noCount * 15}deg)`;
}

// 😈 Handle NO hover
noBtn.addEventListener("mouseover", () => {
  noCount++;

  // update message
  if (noCount < noMessages.length) {
    message.textContent = noMessages[noCount];
  } else {
    message.textContent = "Okay okay... now you can press YES 😳❤️";
  }

  // grow YES gradually
  yesBtn.style.transform = `scale(${1 + noCount * 0.12})`;

  // unlock condition
  if (noCount >= 5 && !yesUnlocked) {
    unlockYes();
  }

  moveNoButton();
});

// 🔒 Block YES spam clicks
yesBtn.addEventListener("click", (e) => {
  if (!yesUnlocked) {
    e.preventDefault();

    // random teasing message
    const randomMsg =
      blockedYesMessages[Math.floor(Math.random() * blockedYesMessages.length)];

    message.textContent = randomMsg;

    // shake button
    yesBtn.style.transform = "scale(1.2) translateX(-5px)";
    setTimeout(() => {
      yesBtn.style.transform = "scale(1.2) translateX(5px)";
    }, 100);

    setTimeout(() => {
      yesBtn.style.transform = "scale(1)";
    }, 200);

    return;
  }

  // ✅ REAL YES ACTION
  startLoveSequence();
});

// 🔓 Unlock YES
function unlockYes() {
  yesUnlocked = true;

  yesBtn.style.opacity = "1";
  yesBtn.style.cursor = "pointer";
  yesBtn.style.boxShadow = "0 0 20px rgba(255,77,109,0.8)";
  yesBtn.innerText = "Yes ❤️ (Now you can click 😌)";

  message.textContent = "Alright... you earned it 💖";
}

// 💖 Final sequence
function startLoveSequence() {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px; font-family:sans-serif;">
      <h1 style="color:#ff4d6d; font-size:3em;">Happy Anniversary ❤️</h1>
      <p style="font-size:1.5em;">You didn't give up on me 🥰</p>
      <p>I love you more every day 💕</p>
    </div>
  `;

  launchConfetti();
  createHearts();
}

// 🎉 Confetti
function launchConfetti() {
  for (let i = 0; i < 120; i++) {
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
      el.style.top = top + 5 + "px";

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

// 🎨 Colors
function randomColor() {
  const colors = ["#ff4d6d", "#ff99ac", "#ffc2d1", "#ffccd5"];
  return colors[Math.floor(Math.random() * colors.length)];
}
