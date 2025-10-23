function make_sketch_pad(size, container) {
  for (let i = 0; i < size; i++) {
    const line = document.createElement("div");
    for (let j = 0; j < size; j++) {
      const box = document.createElement("div");
      let box_opacity = 0.1;

      box.className = "box"

      box.addEventListener("mouseover", (event) => {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        let color_rgb = `rgb(${r}, ${g}, ${b})`;

        event.target.style.backgroundColor = color_rgb;
        
        if (box_opacity < 1)
          box_opacity += 0.1;
        event.target.style.opacity = box_opacity;
      });

      line.appendChild(box);
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