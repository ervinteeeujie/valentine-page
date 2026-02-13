const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Move "No" button when hovered
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Redirect to yes.html when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
