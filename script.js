const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  response.innerHTML = "Then I will linger with you... in every lifetime we ever get.";
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

    setTimeout(() => heart.remove(), 3000);
  }
}
