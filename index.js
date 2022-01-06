let inputText = document.getElementById("input_text");

function input(num) {
    inputText.value += num;
}

function calculate() {
    try{
        inputText.value = eval(inputText.value);
    }
    catch(err){
        alert("Error")
    }
}

function allClear() {
    inputText.value = "";
}

function del() {
    inputText.value = inputText.value.slice(0, -1)
}