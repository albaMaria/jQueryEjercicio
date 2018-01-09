$(document).ready(function() {

$( ".parrafoCuatroDivDos" ).css( "backgroundColor", "purple" );
$(".parrafoDosDivDos").replaceWith("<p>Esto ha cambiado</p>");
$(".parrafoTresDivDos").replaceWith('<a href="https://www.google.com">Google</a>');
// es mejor $("parrafoTresDivDos").html('<a href="https://www.google.com">Google</a>');

});

var parrafoCuatro = document.getElementsByTagName('p')[3];
var parrafoDos = document.getElementsByTagName('p')[1];
var parrafoTres = document.getElementsByTagName('p')[2];
var parrafoTres = document.getElementsByTagName('p')[2];
var enlace = document.createElement('a');
var contenidoEnlace = document.createTextNode('Google');
var parrafoUno = document.getElementsByTagName('p')[0];

function cambiaColorFondo (objeto, color) {
  objeto.style.backgroundColor = color;
}

parrafoUno.onclick = function() {cambiaColorFondo(parrafoUno, '#418ef4')};

enlace.appendChild(contenidoEnlace);
enlace.href = 'https://www.google.es';
parrafoTres.appendChild(enlace);
parrafoTres.href = 'https://www.google.com/';
parrafoDos.innerHTML = 'Esto ha cambiado';
parrafoCuatro.style.backgroundColor = '#fb0808';
