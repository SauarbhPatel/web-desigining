const BTN = document.getElementsByClassName("btn");
const slideCol = document.getElementsByClassName("slide-col");
const SLIDE = document.getElementById("slide");
let i1 = 0;
let i2 = 0;

function next(i1,i2) {
  for (let i = 0; i < 5; i++) {
    BTN[i].classList.remove("active");
    slideCol[i].style.transform = "scale(0.5)";
  }
  SLIDE.style.transform = `translateX(${i2}px)`;
  slideCol[i1].style.transform = "scale(1)";
  BTN[i1].classList.add("active");
}
next(i1,i2);

BTN[0].onclick = function () {
  i1 = 0;
  i2 = 0;
  next(i1,i2);
};
BTN[1].onclick = function () {
  i1 = 1;
  i2 = -760; 
  next(i1,i2);
};
BTN[2].onclick = function () {
  i1 = 2;
  i2 = -1520;
  next(i1,i2);
};
BTN[3].onclick = function () {
  i1 = 3;
  i2 = -2280;
  next(i1,i2);
};
BTN[4].onclick = function () {
  i1 = 4;
  i2 = -3040;
  next(i1,i2);
};
