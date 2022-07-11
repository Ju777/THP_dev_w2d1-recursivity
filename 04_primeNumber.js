const prompt = require("prompt-sync")({ sigint: true });

function checkNumber(number) {
    if (number.includes('.') || number.includes(',') || parseInt(number) != number || parseInt(number) <= 0) {
        console.log("Le nombre doit être un entier positif non nul.");
        return false;
    }  else {
        return true;
    }
}

const isPrimeNumber = (n) => {
    
}



function perform() {
    console.log("~ Déterminer si un nombre est premier ~\n")

    const number = prompt("Quel nombre ? ");

    if (!checkNumber(number)) {
        console.log("FIN");
    } else {
        console.log("Résultat => " + isPrimeNumber(number));
    }
    
}

perform();
