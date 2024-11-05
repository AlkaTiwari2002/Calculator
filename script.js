let show = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn) => {
  btn.addEventListener("click", value);
});

function value(e) {
  let key = e.target.innerText;

  if (key === "AC") {
    show.innerText = ""; 
  } else if (key === "=") {
    try {
      show.innerText = eval(show.innerText); 
    } catch {
      show.innerText = "Error"; 
    }
  } else if (key === "del") {
    show.innerText = show.innerText.slice(0, -1); 
  } else if (key === "sqrt") {
    let currentValue = parseFloat(show.innerText); 
    if (!isNaN(currentValue)) {
      show.innerText = Math.sqrt(currentValue); 
    } else {
      show.innerText = "Error"; 
    }
  } else if (key === "1/x") {
    let currentValue = parseFloat(show.innerText); 
    if (currentValue !== 0) {
      show.innerText = (1 / currentValue); 
    } else {
      show.innerText = "Error"; 
    }
  } else if (key === "PI") {
    show.innerText += Math.PI;
  } else {
    show.innerText += key; 
  }
}
