//CALCULATOR SCRIPT

const display = document.getElementById('display')

//Function to append display
 function appendToDisplay (input) {
    display.value += input
 }


 //Function to calculate
function calculate () {
    try{
        display.value = eval(display.value)
    } catch(error){
        display.value = "Error"
    }
}

 //Function to clear

 function clearDisplay() {
    display.value = ''
 }