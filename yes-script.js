const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Make the "No" button run away
noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// When "Yes" is clicked
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px; font-family:sans-serif;">
      <h1 style="color:#ff4d6d;">Happy Anniversary ❤️</h1>
      <p style="font-size:20px;">You make my life complete 🥰</p>
    </div>
  `;
});
