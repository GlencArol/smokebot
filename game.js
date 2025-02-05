document.addEventListener("DOMContentLoaded", () => {
  // Game variables
  let score = 0;
  let upgradeCost = 10;
  let multiplier = 1;

  // DOM elements
  const scoreDisplay = document.getElementById("score");
  const man = document.getElementById("man");
  const upgradeBtn = document.getElementById("upgrade-btn");

  // Update the score display
  function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
  }

  // Add event listener for tapping the man
  man.addEventListener("click", () => {
    score += 1 * multiplier;
    updateScore();
  });

  // Upgrade button to boost the multiplier
  upgradeBtn.addEventListener("click", () => {
    if (score >= upgradeCost) {
      score -= upgradeCost;
      multiplier += 1;
      // Increase cost (you can adjust the formula)
      upgradeCost = Math.floor(upgradeCost * 1.5);
      alert(`Upgrade successful! Multiplier is now ${multiplier}`);
      updateScore();
    } else {
      alert(`Not enough points! You need ${upgradeCost - score} more points.`);
    }
  });

  // Telegram Mini App initialization
  if (window.Telegram && Telegram.WebApp) {
    // Expand the web app to full height
    Telegram.WebApp.expand();
    // Optionally, you can set the background color based on Telegram’s theme:
    document.body.style.backgroundColor = Telegram.WebApp.themeParams.bg_color;
  }
});
