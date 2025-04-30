const barre = document.getElementById('menu');
const menu = document.getElementById('aside');
const fermer = document.getElementById('fermer');
function changerIframe() {
    var iframe = document.getElementById('monIframe');
    iframe.style.display = 'block'; // Affiche l'iframe
    iframe.src = arguments[0]; // Change l'URL de l'iframe
}
console.log('menu');

barre.addEventListener('click',() => {
    menu.style.display = 'flex';
});
fermer.addEventListener('click',() => {
    menu.style.display = 'none';
});