function make_sketch_pad(size, container) {
  for (let i = 0; i < size; i++) {
    const line = document.createElement("div");
    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.className = "column"
      column.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red";
      })
      line.appendChild(column);
    }
    line.className = "line";
    container.appendChild(line);
  }
}


const container = document.querySelector(".container");
const sketch_button = document.querySelector("button");

sketch_button.addEventListener("click", ()=> {
  container.textContent = "";
  let input = parseInt(prompt("Chose a sketch pad size !"));
  if (isNaN(input) || input <= 0) {
    alert("This is not a valid number ! default value 16 used.");
    input = 16;
  } else if (input > 100) {
    alert("Max value 100. 100 used instead");
    input = 100;
  }
  make_sketch_pad(input, container)
});

make_sketch_pad(16, container)