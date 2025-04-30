var addtodobutton = document.getElementById("addtodo");
var todocontainer = document.getElementById("todocontainer");
var inputfield = document.getElementById("inputfield");

addtodobutton.onclick = function () {
    // Vérifier si l'input n'est pas vide
    if (inputfield.value != "") {
        // Créer un nouvel élément paragraphe
        var paragraph = document.createElement("p");

        // Valoriser ce paragraphe avec le contenu de l'input
        paragraph.innerText = inputfield.value;

        // Ajouter le paragraphe dans l'élément todocontainer
        todocontainer.appendChild(paragraph);

        // Styliser le paragraphe
        paragraph.classList.add("paragraph-style");

        // Vider l'input quand le paragraphe est ajouté
        inputfield.value = "";

        // Barrer le texte quand on clique sur la tâche
        paragraph.addEventListener("click", function () {
            paragraph.classList.add('paragraphe_click');
        });

        // Supprimer la tâche quand on double-clique sur la tâche
        paragraph.addEventListener('dblclick', function () {
            todocontainer.removeChild(paragraph);
        });
    }
};