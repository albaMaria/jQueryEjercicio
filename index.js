$(document).ready(function() {
//  alert('El árbol está listo');
$( ".parrafoCuatroDivDos" ).css( "backgroundColor", "purple" );
$(".parrafoDos").replaceWith("<p>Esto ha cambiado</p>");
});

var parrafoCuatro = document.getElementsByTagName('p')[3];
var parrafoDos = document.getElementsByTagName('p')[1];

parrafoDos.innerHTML = 'Esto ha cambiado';
parrafoCuatro.style.backgroundColor = '#fb0808';
