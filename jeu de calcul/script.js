var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var message = document.querySelector('.message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');
var resInput = document.querySelector('.res');
var compteur = 0;

// Générer des nombres aléatoires entre 0 et 10
function genererNombres() {
    random1 = Math.floor(Math.random() * 11); // Nombre entre 0 et 10
    random2 = Math.floor(Math.random() * 11); // Nombre entre 0 et 10
    nb1.innerHTML = random1;
    nb2.innerHTML = random2;
}

// Initialiser le jeu
genererNombres();

// Fonction de vérification
function verifier() {
    var res = parseInt(resInput.value); // Convertir la réponse en nombre

    if (isNaN(res)) {
        message.style.background = "orange";
        message.innerHTML = "Veuillez entrer un nombre valide.";
        return; // Arrêter la fonction si la réponse n'est pas un nombre
    }

    if (random1 + random2 === res) {
        message.style.background = "green";
        message.innerHTML = "Correct !";
        compteur++;
        genererNombres(); // Générer de nouveaux nombres
    } else {
        message.style.background = "red";
        message.innerHTML = "Incorrect. Vous avez perdu.";
        section.innerHTML = ""; // Cacher la section de calcul
        score.innerHTML = `<span>${compteur}</span></br> Score`;
        link.style.display = "block"; // Afficher le lien "Recommencer"
    }

    // Réinitialiser le champ de réponse
    resInput.value = "";
}

// Réinitialiser le jeu
link.addEventListener('click', function (e) {
    e.preventDefault(); // Empêcher le rechargement de la page
    compteur = 0;
    section.innerHTML = `
        <div class="calcul">
            <h1 class="nb1"></h1>
            <h1 class="op">+</h1>
            <h1 class="nb2"></h1>
        </div>
        <h2>Donner la réponse</h2>
        <input type="number" class="res">
        <input type="submit" onclick="verifier()">
    `;
    genererNombres();
    message.innerHTML = "";
    score.innerHTML = "";
    link.style.display = "none";
});