

// to display value inside the text box

function display(item){
    result.value += item
}
// to clear content
function allClear(){
    result.value=""
}
//to evaluate

function calc(){
    result.value = eval(result.value)
}

// to backspace
function back(){
    result.value = result.value.slice(0,-1)
}