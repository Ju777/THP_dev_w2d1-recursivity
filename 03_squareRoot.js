const prompt = require("prompt-sync")({ sigint: true });

function vaidateNumber(number) {
    if (number.includes('.') || number.includes(',') || parseInt(number) != number || parseInt(number) <= 0) {
        console.log("Vous devez entrer un entier positif non nul.");
        return false;
    }  else {
        return true;
    }
}

const computeSquareRoot = (a, l) => {
    // On va tenter d'arrêter la récursivité quand l atteint 15 chiffres après la virgule (15 a l'air d'être le maximum qui ne fait pas planter).
    // Pour cela, il nous faut une fonction qui récupère le nombre de chiffre apèrs la virgule => digitsAfterDot.
    if (l*l === a || digitsAfterDot(l) >= 15) {
        return l;
    }
    else {
        return computeSquareRoot(a, (l + (a/l))*0.5);
    }
}

function digitsAfterDot(number) {
    number = number.toString();
    if (number.includes('.') === false) {
        return 0;
    } else {
        return number.split('.')[1].length;
    }
}


function findFirstLarger(area) {
    let searchLarger = 2;
    while (searchLarger * searchLarger < area) {
        searchLarger++;
    }
    return searchLarger - 1;

}

function perform() {
    console.log("~ Calcul de la racine carré d'un nombre ~\n")
    // Nous utiliserons la méthode indiquée dans cette vidéo "https://www.youtube.com/watch?v=7dNF29NKhoM", qui présuppose que trouv
    // une racine carré, revient à chercher le côté 'larger' d'un carré dont l'aire est 'area'.
    var area = prompt("Quel nombre ? ");

    if (!vaidateNumber(area)) {
        console.log("FIN");
    } else {
        area = parseInt(area);

        // Selon la méthode pré-citée, il nous faut démarrer la recherche de racine carrée avec une largeur de départ, trouvée via la
        // fonction findFirstLarger, c'est à le dernier entier dont le carré est inférieur à 'area'.
        var larger = findFirstLarger(area);
        console.log("Résultat rapproché => " + computeSquareRoot(area, larger));
    }
    
}

perform();
