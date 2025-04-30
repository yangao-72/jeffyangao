let erreur = document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let court = document.querySelector('.resultat');

// Remplacez 'VOTRE_CLÉ_API_BITLY' par votre clé API Bitly
const API_KEY = "VOTRE_CLÉ_API_BITLY";

function clique() {
    // Vérification de l'input
    if (longLink.value.trim() !== "") {
        // Vider l'erreur
        erreur.innerHTML = "";

        // Appel à l'API Bitly
        let url = "https://api-ssl.bitly.com/v4/shorten";
        fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                long_url: longLink.value.trim(), // Lien à raccourcir
                domain: "bit.ly" // Domaine optionnel
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau ou API');
            }
            return response.json(); // Bitly API retourne du JSON
        })
        .then(data => {
            if (data.link) {
                court.innerHTML = `<a href="${data.link}" target="_blank">${data.link}</a>`;
            } else {
                court.innerHTML = "Lien NON valide!";
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            court.innerHTML = "Erreur lors du raccourcissement du lien";
        });

        // Afficher le résultat
        court.style.display = "block";
    } else {
        // Afficher l'erreur si le champ est vide
        erreur.innerHTML = "Veuillez remplir le champ";
        court.style.display = "block";
    }
}