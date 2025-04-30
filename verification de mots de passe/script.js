// Récupérer les éléments du DOM
var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');

// Lorsque l'utilisateur clique sur le champ du mot de passe, afficher la boîte de message
myInput.addEventListener('focus', function () {
    document.getElementById('message').style.display = 'block';
});

// Lorsque l'utilisateur commence à taper dans le champ du mot de passe
myInput.addEventListener('keyup', function () {
    // Valider les lettres minuscules
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    } else {
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

    // Valider les lettres majuscules
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    } else {
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    // Valider les nombres
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    // Valider la longueur
    if (myInput.value.length >= 8) {
        length.classList.remove('invalid');
        length.classList.add('valid');
    } else {
        length.classList.remove('invalid');
        length.classList.add('valid');
    }
});