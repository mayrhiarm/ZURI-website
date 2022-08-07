/** @format */

let paragraph = document.querySelectorAll(".hidden_paragraph");
let plus = document.querySelectorAll(".plus");

// console.log(plus[0]);
// console.log(paragraph[0]);
// paragraph[0].style.display = 'block'

plus[0].addEventListener("click", () => {
  if (!plus[0].classList.contains("active")) {
    plus[0].classList.toggle("active");
    paragraph[0].style.display = "block";
  } else {
    plus[0].classList.remove("active");
    paragraph[0].style.display = "none";
  }
});

plus[1].addEventListener("click", () => {
  if (!plus[1].classList.contains("active")) {
    plus[1].classList.toggle("active");
    paragraph[1].style.display = "block";
  } else {
    plus[1].classList.remove("active");
    paragraph[1].style.display = "none";
  }
});

plus[2].addEventListener("click", () => {
  if (!plus[2].classList.contains("active")) {
    plus[2].classList.toggle("active");
    paragraph[2].style.display = "block";
  } else {
    plus[2].classList.remove("active");
    paragraph[2].style.display = "none";
  }
});

plus[3].addEventListener("click", () => {
  if (!plus[3].classList.contains("active")) {
    plus[3].classList.toggle("active");
    paragraph[3].style.display = "block";
  } else {
    plus[3].classList.remove("active");
    paragraph[3].style.display = "none";
  }
});

plus[4].addEventListener("click", () => {
  if (!plus[4].classList.contains("active")) {
    plus[4].classList.toggle("active");
    paragraph[4].style.display = "block";
  } else {
    plus[4].classList.remove("active");
    paragraph[4].style.display = "none";
  }
});

// plus[1].classList.remove("active");
// plus[2].classList.remove("active");
// plus[3].classList.remove("active");
// plus[4].classList.remove("active");
