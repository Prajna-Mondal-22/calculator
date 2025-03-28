function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    const display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
  }
  
  function calculateResult() {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (error) {
      alert("Invalid input");
    }
  }