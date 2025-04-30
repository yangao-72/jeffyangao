const contenantChoixOrdinateur = document.getElementById("choix-ordinateur");
const contenantChoixUtilisateur = document.getElementById("choix-utilisateur");
const contenantResultat = document.getElementById("resultat");

const choixPossibles = document.querySelectorAll("button"); // Correction : "button" au lieu de "boutton"

let choixUtilisateur;
let resultat;
let choixOrdinateur;

// Événement 'Click' sur les boutons
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e) => {
    // Récupération de l'id du bouton cliqué
    choixUtilisateur = e.target.id;
    // On ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`; // Correction : innerHTML et guillemets
    generer_choix_ordinateur();
    verification();
}));

// Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur() {
    const random = Math.floor(Math.random() * 3) + 1; // Correction : ajout de 'const'
    if (random === 1) {
        choixOrdinateur = "pierre";
    } else if (random === 2) {
        choixOrdinateur = "papier"; // Attention : faute de frappe ici, c'est "papier"
    } else if (random === 3) {
        choixOrdinateur = "ciseaux";
    }
    // On ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`; // Correction : innerHTML et guillemets
}

// Fonction pour vérifier si le joueur a gagné ou perdu
function verification() {
    if (choixUtilisateur === choixOrdinateur) {
        resultat = "Égalité !";
    }
    // Cas où le joueur perd
    else if (
        (choixUtilisateur === "pierre" && choixOrdinateur === "papier") ||
        (choixUtilisateur === "papier" && choixOrdinateur === "ciseaux") ||
        (choixUtilisateur === "ciseaux" && choixOrdinateur === "pierre")
    ) {
        resultat = "Perdu !";
    }
    // Cas où le joueur gagne
    else {
        resultat = "Gagné !";
    }
    contenantResultat.innerHTML = resultat; // Affichage du résultat
}
