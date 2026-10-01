const app = document.getElementById("app");
let floor = 0;

const challenges = [
  ["Floor 1 — Path Detective",
   "Start under the blue stairwell. Follow someone's movement with your eyes. Where do they go?"],

  ["Floor 2 — Reflection Hunt",
   "Find a window or reflective surface in a public area. Move slightly. What changes?"],

  ["Floor 3 — Sound Scavenger",
   "Pause in a public area. Listen for 20 seconds. How many different sounds can you hear?"],

  ["Floor 4 — Switch Your View",
   "Choose a detail. Look from nearby, then a few steps away. Which view reveals more?"],

  ["Floor 5 — Spot the Change",
   "Watch one scene for 30 seconds. What moves, appears, or disappears?"]
];

function showTour() {
  if (floor === challenges.length) {
    app.innerHTML = `
      <div class="challenge">
        <h2>Tour complete! ✳</h2>
        <p>You collected five stamps.</p>
        <p>Compare your discoveries with a classmate!</p>
        <button class="primary" id="restart">Play again</button>
      </div>`;
    return;
  }

  app.innerHTML = `
    <div class="challenge">
      <p>${floor} of 5 stamps collected</p>
      <h2>${challenges[floor][0]}</h2>
      <p>${challenges[floor][1]}</p>
      <p>Use the stairs or elevator. Keep walkways clear.</p>
      <button class="primary" id="next">
        Done! Collect my stamp
      </button>
    </div>`;
}

app.addEventListener("click", (event) => {
  if (event.target.id === "next") {
    floor++;
    showTour();
  }

  if (event.target.id === "restart") {
    floor = 0;
    showTour();
  }
});

showTour();
