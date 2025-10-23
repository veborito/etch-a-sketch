const container = document.querySelector(".container");
const SIZE = 5;

for (let i = 0; i < SIZE; i++) {
  let line = document.createElement("div");
  for (let j = 0; j < SIZE; j++) {
    let column = document.createElement("div");
    column.className = "column"
    line.appendChild(column);
  }
  line.className = "line";
  container.appendChild(line);
}