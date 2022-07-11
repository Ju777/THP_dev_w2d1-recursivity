const prompt = require("prompt-sync")({ sigint: true });

function checkNumber(number) {
    if (number.includes('.') || number.includes(',') || parseInt(number) != number || parseInt(number) <= 0) {
        console.log("Le nombre doit être un entier positif non nul.");
        return false;
    }  else {
        return true;
    }
}

const computeSquareRoot = (n, p) => {
    n = parseInt(n);

    for(let i = 1 ; i <= n ; i++) {
        if(i * i === n) {
            return i;
        }
        if (i === n) {
            return "La racine n'est pas un nombre entier. Attendre la V2 pour ce type de calcul :D ."
        }
    }
}



function perform() {
    console.log("~ Calcul de la racine carré d'un nombre ~\n")

    const number = prompt("Quel nombre ? ");

    if (!checkNumber(number)) {
        console.log("FIN");
    } else {
        console.log("Résultat => " + computeSquareRoot(number));
    }
    
}

perform();
