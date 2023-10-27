// set inital value to zero

let count = 0;
let randomNumber = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

function getRandomNumber() {
  return Math.ceil(Math.random() * 100 + 1);
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if(styles.contains("random-inc")) {
      randomNumber = getRandomNumber();
      count += randomNumber;
    }else if(styles.contains("random-dec")) {
      randomNumber = getRandomNumber();
      count -= randomNumber;
    }else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});