function appendToDisplay(value) {
  const display = document.getElementById("display");
  const lastChar = display.value.slice(-1);

  // Prevent multiple operators in a row
  if (["+", "-", "*", "/", "%"].includes(lastChar) && ["+", "-", "*", "/", "%"].includes(value)) {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let expression = document.getElementById("display").value;
    
    // Prevent evaluation of invalid expressions
    if (!expression || ["+", "-", "*", "/", "%"].includes(expression.slice(-1))) {
      alert("Invalid input");
      return;
    }

    let result = eval(expression); // Eval should be used carefully
    document.getElementById("display").value = isNaN(result) ? "Error" : result;
  } catch (error) {
    alert("Invalid input");
  }
}
