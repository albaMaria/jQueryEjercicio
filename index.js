$(document).ready(function() {
//  alert('El árbol está listo');
$( ".parrafoCuatroDivDos" ).css( "backgroundColor", "purple" );
$(".parrafoDosDivDos").replaceWith("<p>Esto ha cambiado</p>");
});

var parrafoCuatro = document.getElementsByTagName('p')[3];
var parrafoDos = document.getElementsByTagName('p')[1];
var parrafoTres = document.getElementsByTagName('p')[2];
var parrafoTres = document.getElementsByTagName('p')[2];
var enlace = document.createElement('a');
var contenidoEnlace = document.createTextNode('Google');

enlace.appendChild(contenidoEnlace);
enlace.href = 'https://www.google.es';
parrafoTres.appendChild(enlace);
parrafoTres.href = 'https://www.google.com/';
parrafoDos.innerHTML = 'Esto ha cambiado';
parrafoCuatro.style.backgroundColor = '#fb0808';
