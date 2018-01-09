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

function getCookie(cookieName) {
var name = cookieName + "=";
var cookieParts = document.cookie.split(';');
for (var i = 0; i < cookieParts.length; i++) {
var cookieValue = cookieParts[i];
while (cookieValue.charAt(0) === ' ') {
cookieValue = cookieValue.substring(1);
}
if (cookieValue.indexOf(name) === 0) {
return cookieValue.substring(name.length, cookieValue.length);
}
}
return "";
}

function setCookie(cookieName, cookieValue, expiredDays) {
var date = new Date();
date.setTime(date.getTime() + (expiredDays * 24 * 60 * 60 * 1000));
var expires = "expires=" + date.toUTCString();
document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function checkCookie() {
var user = getCookie('username');
if (user != '') {
alert('Hola de nuevo ' + user);
} else {
user = prompt('¿Cómo te llamas? ', '');
if (user != '' && user != null) {
setCookie('username', user, 365);
}
}
}

checkCookie();
