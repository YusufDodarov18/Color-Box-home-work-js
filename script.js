const btnChange = document.querySelector(".btnChange");
const color = document.querySelector(".color");
const box = document.querySelector(".box");

let colors = [
  "red",
  "yellow",
  "green",
  "blue",
  "orange",
  "gray",
  "black",
  "purple",
  "pink",
  "violet",
];

btnChange.onclick = () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  const bgColor = colors[randomColor];
  color.textContent = bgColor;
  box.style.backgroundColor = bgColor;
};
