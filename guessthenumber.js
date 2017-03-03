function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareNumbers(first, second) {
    return (first == second);
}

var numberToBeGuessed = getRandomInteger(1, 10);

function guessTheNumber(){
    var input = parseInt(document.getElementById("number").value);
    if(input >= 1 && input <= 10){
        if(compareNumbers(numberToBeGuessed, input)){
            alert("you win!");
        } else {
            alert("you lose!");
        }
        numberToBeGuessed = getRandomInteger(1, 10)
    } else {
       alert("Invalid input value!");
    }
}