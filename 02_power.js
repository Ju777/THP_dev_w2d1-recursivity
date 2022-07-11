const prompt = require("prompt-sync")({ sigint: true });

function checkNumber(number) {
    if (number.includes('.') || number.includes(',') || parseInt(number) != number || parseInt(number) < 0) {
        console.log("Le nombre doit être un entier positif non nul.");
        return false;
    }  else {
        return true;
    }
}

function checkPower(power) {
    if (power.includes('.') || power.includes(',') || parseInt(power) != power || parseInt(power) < 0) {
        console.log("La puissance doit être un entier positif.");
        return false;
    }  else {
        return true;
    }
}

const computePowerIt = (n, p) => {
    if (p === 0) {
        return 1;
    } else {
        let result = 1;
        for(let i = 1 ; i <= p; i++) {
            result *= n;
        }
        return result;
    }
}

const computePowerRec = (n, p) => {
    if (p === 0) {
        return 1;
    } else {
        return n * computePowerRec(n, p-1);
    }
}

function perform() {
    console.log("~ Calcul de la puissance d'un nomber ~\n")

    const number = prompt("Quel nombre ? ");
    const power = prompt("A quelle puissance ? ");

    if (!checkNumber(number) || !checkPower(power)) {
        console.log("FIN");
    } else {
        console.log("[Itérations] => " + computePowerIt(parseInt(number), parseInt(power)));
        console.log("[Récursivité] => " + computePowerRec(parseInt(number), parseInt(power)));
    }
    
}

perform();
