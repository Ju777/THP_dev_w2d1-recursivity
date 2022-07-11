const prompt = require("prompt-sync")({ sigint: true });

function vaidateNumber(number) {
    if (number.includes('.') || number.includes(',') || parseInt(number) != number || parseInt(number) <= 0) {
        console.log("Le nombre doit être un entier positif non nul.");
        return false;
    }  else {
        return true;
    }
}

const isPrimeNumber = (n, i) => {
    // Aidé par cette source : https://www.geeksforgeeks.org/recursive-program-prime-number/
    
    // Base cases
    if (n <= 2)
        return (n == 2) ? true : false;
    if (n % i == 0)
        return false;
    if (i * i > n)
        return true;
    
    // Check for next divisor
    return isPrimeNumber(n, i + 1);
}

function perform() {
    console.log("~ Déterminer si un nombre est premier ~\n")

    var number = prompt("Quel nombre ? ");

    if (!vaidateNumber(number)) {
        console.log("FIN");
    } else {
        number = parseInt(number);
        console.log("Résultat => " + isPrimeNumber(number, 2));
    }
    
}

perform();
