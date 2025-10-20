const container = document.querySelector(".container");
const NUM_DIVS = 16 * 16;

for (let i = 0; i < NUM_DIVS; i++) {
  let div = document.createElement("div");
  div.className = "item";
  container.appendChild(div);
}