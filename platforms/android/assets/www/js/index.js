
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    $(".Inicio").css("color", "#ffbc00");


        
        
    }
};

app.initialize();

$(".Inicio").click(function () {
    cambiarImagen('img/activo/inicio.png','img/inactivo/fondos.png','img/inactivo/personajes.png','img/inactivo/globos.png','img/inactivo/texto.png','img/inactivo/editar.png');
    cambiarColor("#ffbc00"," #b0b0b1"," #b0b0b1"," #b0b0b1","#b0b0b1","#b0b0b1");
    mostrarSecciones("#mostrarinicio","#mostrarfondos","#mostrarpersonajes","#mostrarglobos","#mostrartexto","#mostrarfiltros");
})
$(".Fondos").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/activo/fondos.png','img/inactivo/personajes.png','img/inactivo/globos.png','img/inactivo/texto.png','img/inactivo/editar.png');
        cambiarColor("#b0b0b1"," #ffbc00"," #b0b0b1"," #b0b0b1"," #b0b0b1","#b0b0b1");
        mostrarSecciones("#mostrarfondos","#mostrarinicio","#mostrarpersonajes","#mostrarglobos","#mostrartexto","#mostrarfiltros");
})
$(".Personajes").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/inactivo/fondos.png','img/activo/personajes.png','img/inactivo/globos.png','img/inactivo/texto.png','img/inactivo/editar.png');
        cambiarColor("#b0b0b1"," #b0b0b1"," #ffbc00"," #b0b0b1"," #b0b0b1","#b0b0b1");
        mostrarSecciones("#mostrarpersonajes","#mostrarfondos","#mostrarinicio","#mostrarglobos","#mostrartexto","#mostrarfiltros");

})
$(".Globos").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/inactivo/fondos.png','img/inactivo/personajes.png','img/activo/globos.png','img/inactivo/texto.png','img/inactivo/editar.png');
        cambiarColor("#b0b0b1"," #b0b0b1"," #b0b0b1"," #ffbc00"," #b0b0b1","#b0b0b1");
        mostrarSecciones("#mostrarglobos","#mostrarpersonajes","#mostrarfondos","#mostrarinicio","#mostrartexto","#mostrarfiltros");
})
$(".Texto").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/inactivo/fondos.png','img/inactivo/personajes.png','img/inactivo/globos.png','img/activo/texto.png','img/inactivo/editar.png');
        cambiarColor("#b0b0b1"," #b0b0b1"," #b0b0b1"," #b0b0b1","#ffbc00","#b0b0b1");
        mostrarSecciones("#mostrartexto","#mostrarglobos","#mostrarpersonajes","#mostrarfondos","#mostrarinicio","#mostrarfiltros");
})
$(".Editar").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/inactivo/fondos.png','img/inactivo/personajes.png','img/inactivo/globos.png','img/inactivo/texto.png','img/activo/editar.png');
        cambiarColor("#b0b0b1"," #b0b0b1"," #b0b0b1"," #b0b0b1","#b0b0b1","#ffbc00");
        mostrarSecciones("#mostrarfiltros","#mostrartexto","#mostrarglobos","#mostrarpersonajes","#mostrarfondos","#mostrarinicio");
})
function cambiarImagen(inicio,fondos,personajes,globos,texto,editar){

    $(".Inicio").attr('src', inicio);
    $(".Fondos").attr('src', fondos);
    $(".Personajes").attr('src', personajes);
    $(".Globos").attr('src', globos);
    $(".Texto").attr('src', texto);
    $(".Editar").attr('src', editar);
}

function cambiarColor(inicio,fondos,personajes,globos,texto,editar){

    $(".Inicio").css("color",inicio);
    $(".Fondos").css("color",fondos);
    $(".Personajes").css("color",personajes);
    $(".Globos").css("color",globos);
    $(".Texto").css("color",texto);
    $(".Editar").css("color",editar);
}
function mostrarSecciones(activo,inactivo1,inactivo2,inactivo3,inactivo4,inactivo5){
      $(activo).show();
      $(inactivo1).hide();
      $(inactivo2).hide();
      $(inactivo3).hide();
      $(inactivo4).hide();
      $(inactivo5).hide();

         
   }

