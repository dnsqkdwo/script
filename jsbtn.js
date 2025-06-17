const leftBtns = document.querySelectorAll(".left_btn");
const rightBtns = document.querySelectorAll(".right_btn");
const slider = document.getElementById("slider");

let current = 0; 
const max = 2;
const step = 1200; 

leftBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      slider.style.transform = `translateX(${-step * current}px)`;
    }
  });
});

rightBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (current < max) {
      current++;
      slider.style.transform = `translateX(${-step * current}px)`;
    }
  });
});
