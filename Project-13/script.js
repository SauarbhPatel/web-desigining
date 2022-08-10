const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const input5 = document.querySelector("#input5");

const transition = (text) => {
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) => `<span style="transition-delay:${i * 50}ms">${char}</span>`
    )
    .join("");
};
transition(input1);
transition(input2);
transition(input3);
transition(input4);
transition(input5);
