var display = document.getElementById("txt");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    var expression = display.value;
    var result = eval(expression);
    //  eval()predefine function of js is used here for caluclating the result
    display.value = " " + result;
}