const prompt = require("prompt-sync")({ sigint: true });

function checkInput(input) {
    if (input.includes('.') || input.includes(',') || parseInt(input) != input || parseInt(input) < 0) {
        console.log("Le nombre doit être un entier positif ou nul.");
        return false;
    }  else {
        return true;
    }
}

const computeFactorialIt = (n) => {
    if (parseInt(n) === 0) {
        return 1;
    } else {      
        let accumulator = 1; 
        for (let i = 1 ; i <= n ; i++ ) {
            accumulator = accumulator * i;
        }
        return accumulator;
    }
}

const computeFactorialRec = (n) => {
    if (parseInt(n) === 0) {
        return 1;
    } else {
        return n * computeFactorialRec(n-1);
    }
}

function perform() {
    const choice = prompt("Factorielle de combien ? ");
    if (!checkInput(choice)) {
        console.log("FIN");
    } else {
        console.log("[Itérations] => " + computeFactorialIt(choice));
        console.log("[Récursivité] => " + computeFactorialRec(choice));
    }
    
}

perform();
