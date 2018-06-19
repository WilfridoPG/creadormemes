
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
})
$(".Fondos").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/activo/fondos.png','img/inactivo/personajes.png','img/inactivo/globos.png','img/inactivo/texto.png','img/inactivo/editar.png');
        cambiarColor("#b0b0b1"," #ffbc00"," #b0b0b1"," #b0b0b1"," #b0b0b1","#b0b0b1");
})
$(".Personajes").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/inactivo/fondos.png','img/activo/personajes.png','img/inactivo/globos.png','img/inactivo/texto.png','img/inactivo/editar.png');
        cambiarColor("#b0b0b1"," #b0b0b1"," #ffbc00"," #b0b0b1"," #b0b0b1","#b0b0b1");
})
$(".Globos").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/inactivo/fondos.png','img/inactivo/personajes.png','img/activo/globos.png','img/inactivo/texto.png','img/inactivo/editar.png');
        cambiarColor("#b0b0b1"," #b0b0b1"," #b0b0b1"," #ffbc00"," #b0b0b1","#b0b0b1");
})
$(".Texto").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/inactivo/fondos.png','img/inactivo/personajes.png','img/inactivo/globos.png','img/activo/texto.png','img/inactivo/editar.png');
        cambiarColor("#b0b0b1"," #b0b0b1"," #b0b0b1"," #b0b0b1","#ffbc00","#b0b0b1");
})
$(".Editar").click(function () {
        cambiarImagen('img/inactivo/inicio.png','img/inactivo/fondos.png','img/inactivo/personajes.png','img/inactivo/globos.png','img/inactivo/texto.png','img/activo/editar.png');
        cambiarColor("#b0b0b1"," #b0b0b1"," #b0b0b1"," #b0b0b1","#b0b0b1","#ffbc00");
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

