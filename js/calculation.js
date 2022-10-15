const screenElement = document.querySelector(".screen");
const numKeysElements = document.querySelectorAll("[data-num]");
const equalElement = document.querySelector("[data-equal]");
const resetElement = document.querySelector("[data-reset]");
const deleteElement = document.querySelector("[data-delete]");
const plusElement = document.querySelector("[data-plus]");
const minusElement = document.querySelector("[data-minus]");
const multiplyElement = document.querySelector("[data-multiply]");
const devideElement = document.querySelector("[data-devide]");
const dotElement = document.querySelector("[data-dot]");

let inputValues = [];

numKeysElements.forEach(function (key) {
  key.addEventListener("click", (event) => {
    screenElement.value += key.textContent;
    inputValues.push(key.textContent);
  });
});

function preventRepeat(key) {
  if (Number(screenElement.value.slice(-1)) >= 0 && screen.value != "") {
    screenElement.value += key.textContent;
    if (key == multiplyElement) {
      inputValues.push(key.value);
    } else {
      inputValues.push(key.textContent);
    }
  }
}

plusElement.onclick = () => {
  preventRepeat(plusElement);
};

minusElement.onclick = () => {
  preventRepeat(minusElement);
};

multiplyElement.onclick = () => {
  preventRepeat(multiplyElement);
};

devideElement.onclick = () => {
  preventRepeat(devideElement);
};

dotElement.onclick = () => {
  preventRepeat(dotElement);
};

resetElement.onclick = () => {
  screenElement.value = "";
  inputValues = [];
};

equalElement.onclick = () => {
  screenElement.value = eval(inputValues.join(""));
  inputValues = [];
  inputValues.push(screenElement.value);
};

deleteElement.onclick = () => {
  inputValues = inputValues.slice(0, inputValues.length - 1);
  screenElement.value = inputValues.join("");
};
