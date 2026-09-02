let write_area = document.getElementById("write_area");
let calculatorContainer = document.getElementById("Calculator_container");

calculatorContainer.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    switch (e.target.innerText) {
      case "C":
        clear();
        break;
      case "DEL":
        deleteLast();
        break;
      case "x²":
        let x = Math.pow(Number(write_area.innerHTML), 2);
        write_area.innerHTML = x;
        break;
      case "!":
        let fac = 1;
        for (let i = Number(write_area.innerHTML); i > 1; i--) {
          fac *= i;
        }
        write_area.innerHTML = fac;
        break;
      case "=":
        evaluate();
        break;
      default:
        addToDisplay(e.target.innerText);
        break;
    }
  }
});

function clear() {
  write_area.innerHTML = "";
}

function addToDisplay(value) {
  write_area.innerHTML += value;
}

function deleteLast() {
  write_area.innerHTML = write_area.innerHTML.slice(0, -1);
}

function evaluate() {
  try {
    let expression = write_area.innerHTML;
    let result = math.evaluate(expression);
    write_area.innerHTML = result.toString();
  } catch (error) {
    write_area.innerHTML = "Error";
  }
}
