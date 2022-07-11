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
    // A noter que le protoype de la fonction compte un argument de plus que celui de l'énoncé.
    
    // Base cases
    if (n <= 2)
        // return (n == 2) ? true : false;
        return true;
    if (n % i == 0)
        return false;
    if (i * i > n)
        return true;
    
    // Check for next divisor
    return isPrimeNumber(n, i + 1);
}

const findSubPrime = (n) => {
    if (isPrimeNumber(n, 2)) {
        return n
    } else {
        return findSubPrime(n+1);
    }
    
}

function perform() {
    console.log("~ Trouver le plus petit nombre premier supérieur ou égal à un nombre ~\n")

    var number = prompt("Quel nombre ? ");

    if (!vaidateNumber(number)) {
        console.log("FIN");
    } else {
        number = parseInt(number);
        console.log("Résultat => " + findSubPrime(number));
    }
    
}

perform();
