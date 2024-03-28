// Fonction pour additionner
function addition(nombreA: number, nombreB: number): number {
    return nombreA + nombreB;
}

// Fonction pour multiplier
function multiplication(nombreA: number, nombreB: number): number {
    return nombreA * nombreB;
}

// Fonction pour soustraire
function soustraction(nombreA: number, nombreB: number): number {
    return nombreA - nombreB;
}

// Fonction pour diviser
function division(nombreA: number, nombreB: number): number {
    if(nombreB === 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}

// Demande un choix
let choix: number;
do {
    choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
} while(choix !== 1 && choix !== 2 && choix !== 3 && choix !== 4)

// Demande deux nombres
let premierNombre: number;
let deuxiemeNombre: number;
do {
    premierNombre = Number(prompt("Entrez un premier nombre :"));
    deuxiemeNombre = Number(prompt("Entrez un deuxième nombre : "));
} while(isNaN(premierNombre) || isNaN(deuxiemeNombre))

// Appelle la fonction choisie
try {
    let resultat: number;
    switch (choix) {
        case 1:
            resultat = addition(premierNombre, deuxiemeNombre);
            break;
        
        case 2:
            resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        
        case 3:
            resultat = soustraction(premierNombre, deuxiemeNombre);
            break;

        case 4:
            resultat = division(premierNombre, deuxiemeNombre);
            break;

        default:
            throw new Error("Une erreur est survenue.");
    }

    // Affiche le résultat
    alert("Voici le résultat : " + resultat);
}
catch(error) {
    alert(error); // Si une erreur est survenue, on affiche l'erreur
}
