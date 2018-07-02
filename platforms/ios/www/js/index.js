
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
         //$(".Editar").prop('disabled', true);


    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

   
    var fondo,fbandera=0;
    
    document.getElementById('file-5').addEventListener("change", function (e) {
    var file = e.target.files[0];
	var reader = new FileReader();
 	reader.onload = function (event) {
    var img = new Image();
   	img.onload = function (){ 
	    var f_img = new fabric.Image(img,{left: 0,top: 0,width:canvas.width,height:canvas.height,/*angle: 30,opacity: 0.85*/});
      canvas.setBackgroundImage(f_img);
      canvas.renderAll();
   	}
   	img.src = event.target.result;
    GenerarMeme(img.src);
  }
	reader.readAsDataURL(file);
});
	// cargar imagen sobre el fondo 
document.getElementById('file-6').addEventListener("change", function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (f) {
    var data = f.target.result; 
   	fabric.Image.fromURL(data, function (img) {
      var oImg = img.set({left: 10, top: 100, angle: 00,width:300, height:200,cornerStyle: 'circle',cornerSize: 20,}).scale(0.9);
      canvas.add(oImg).renderAll();
     	//canvas.setActiveObject(oImg);
     	//canvas.toDataURL({format: 'png', quality: 0.8});
   	});
    //GenerarMeme(data.src);
 	};
  reader.readAsDataURL(file);
});    
    }
};

app.initialize();

$(".Nuevo").click(function () {
    navigator.notification.confirm("Se borrará lo que ha realizado ¿Desea continuar ?", confirmCallback, "Nuevo Meme", "Si,No");
    function confirmCallback(buttonIndex) {
        if(buttonIndex==1){
            canvas.clear();
            fbandera=0;
            $(".Editar").prop('disabled', true);  
            cambiarImagen('img/activo/inicio.png','img/inactivo/fondos.png','img/inactivo/personajes.png','img/inactivo/globos.png','img/inactivo/texto.png','img/inactivo/editar.png');
            cambiarColor("#ffbc00"," #b0b0b1"," #b0b0b1"," #b0b0b1","#b0b0b1","#b0b0b1");
            mostrarSecciones("#mostrarinicio","#mostrarfondos","#mostrarpersonajes","#mostrarglobos","#mostrartexto","#mostrarfiltros");
        }
    }

})
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
$(".Filtros").click(function () {
       $(".Filtros").css("color", "#ffbc00");
       $(".Filtros").attr('src', 'img/activo/filtros.png');
       $(".Combinar").css("color", "#b0b0b1");
       $(".Combinar").attr('src', 'img/inactivo/combinar.png');
       $("#mostrarfiltrosf").show();
       $("#mostrarfiltrosc").hide();
})
$(".Combinar").click(function () {
       $(".Filtros").css("color", "#b0b0b1");
       $(".Filtros").attr('src', 'img/inactivo/filtros.png');
       $(".Combinar").css("color", "#ffbc00");
       $(".Combinar").attr('src', 'img/activo/combinar.png');
        $("#mostrarfiltrosc").show();
       $("#mostrarfiltrosf").hide();
       cambiarColorf("#ffbc00","#b0b0b1","#b0b0b1","#b0b0b1");
       cambiarImagenf('img/activo/brillo.png','img/inactivo/transparencia.png','img/inactivo/pixel.png','img/inactivo/opacidad.png');
       mostrarango("#brillorango","#transparenciarango","#pixelrango","#opacidadrango");
})
$(".Brillo").click(function () { 
        cambiarColorf("#ffbc00","#b0b0b1","#b0b0b1","#b0b0b1");
        cambiarImagenf('img/activo/brillo.png','img/inactivo/transparencia.png','img/inactivo/pixel.png','img/inactivo/opacidad.png');
        mostrarango("#brillorango","#transparenciarango","#pixelrango","#opacidadrango");
})
$(".Transparencia").click(function () { 
        cambiarColorf("#b0b0b1","#ffbc00","#b0b0b1","#b0b0b1");
        cambiarImagenf('img/inactivo/brillo.png','img/activo/transparencia.png','img/inactivo/pixel.png','img/inactivo/opacidad.png');
        mostrarango("#transparenciarango","#brillorango","#pixelrango","#opacidadrango");
})
$(".Pixel").click(function () { 
        cambiarColorf("#b0b0b1","#b0b0b1","#ffbc00","#b0b0b1");
        cambiarImagenf('img/inactivo/brillo.png','img/inactivo/transparencia.png','img/activo/pixel.png','img/inactivo/opacidad.png');
        mostrarango("#pixelrango","#transparenciarango","#brillorango","#opacidadrango");
})
$(".Opacidad").click(function () { 
        cambiarColorf("#b0b0b1","#b0b0b1","#b0b0b1","#ffbc00");
        cambiarImagenf('img/inactivo/brillo.png','img/inactivo/transparencia.png','img/inactivo/pixel.png','img/activo/opacidad.png');
        mostrarango("#opacidadrango","#pixelrango","#transparenciarango","#brillorango");
})
function cambiarColorf(brillo,transparencia,pixel,opacidad){
    $(".Brillo").css("color", brillo);
    $(".Transparencia").css("color", transparencia);
    $(".Pixel").css("color", pixel);
    $(".Opacidad").css("color", opacidad);
}
function cambiarImagenf(brillo,transparencia,pixel,opacidad){
    $(".Brillo").attr('src', brillo);
    $(".Transparencia").attr('src', transparencia);
    $(".Pixel").attr('src', pixel);
    $(".Opacidad").attr('src', opacidad);
}
function mostrarango(activo,inactivo1,inactivo2,inactivo3){
      $(activo).show();
      $(inactivo1).hide();
      $(inactivo2).hide();
      $(inactivo3).hide();        
}


$('#Eliminar').click(function(){
  var activeObject = canvas.getActiveObject(),
  activeGroup = canvas.getActiveGroup();
  if (activeObject) {
    canvas.remove(activeObject);
  }
  else if (activeGroup) {
    var objectsInGroup = activeGroup.getObjects();
    canvas.discardActiveGroup();
    objectsInGroup.forEach(function(object) {
      canvas.remove(object);
    });               
  }else{
      navigator.notification.alert("Seleccione un elemento o grupo de elementos.", alertCallback, "Eliminar", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");   
      }  
   }   
});
    //Agrupar elementos 
$("#Agrupar").click(function() {
  if (canvas.getActiveGroup()) {
    var activegroup = canvas.getActiveGroup();
    var objectsInGroup = activegroup.getObjects();
    activegroup.clone(function(newgroup) {
      canvas.discardActiveGroup();
      objectsInGroup.forEach(function(object) {
            canvas.remove(object);  
        });
      canvas.add(newgroup);  
    });
  }else{
    navigator.notification.alert("Para agrupar, seleccione dos o más elementos, haga doble clic y arrastre sobre los elementos. ", alertCallback, "Agrupar", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
    }
    //alert("Por favor seleccione dos o más elementos");
});
$("#Desagrupar").click(function(){
  var activeObject = canvas.getActiveObject();
  if(canvas.getActiveObject() && activeObject.type=="group"){   
    var items = activeObject._objects;
    activeObject._restoreObjectsState();
    canvas.remove(activeObject);
    for(var i = 0; i < items.length; i++) {
      canvas.add(items[i]);
      canvas.item(canvas.size()-1).hasControls = true;
    }
    canvas.renderAll();    
  }else
  {
    navigator.notification.alert("Selecione un elemento agrupado.", alertCallback, "Desagrupar", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      } 
  } // alert("Por favor seleccione elemento agrupado");
});
$('#Descargar').click(function(){
 /*
  this.href = canvas.toDataURL({
    format: 'png',
    quality: 10
  });
  this.download = 'Meme.png';
  */
  window.canvas2ImagePlugin.saveImageDataToLibrary(
    function(msg){ 
      navigator.notification.alert('Se ha guardado el archivo en la galería de fotos', alertCallback, 'Descarga', ' Aceptar');
      function alertCallback() {
        console.log("Alert is Dismissed!");
      }       // Ext.Msg.alert('Descarga','Se ha guardado el meme en la galería de su dispositivo');
    },
    function(err){
      navigator.notification.alert('Error, no se pudo guardar el archivo.', alertCallback, 'Descarga', ' Aceptar');
      function alertCallback() {
        console.log("Alert is Dismissed!");
      }   // Ext.Msg.alert('Descarga','Error no se pudo guardar el archivo');
    },
    document.getElementById('canvas')
  );
});
$("#Agregartext").click(function(){
  $("#modaltext").modal();
});

function agregarTexto(){
    var texto = document.getElementById('textomeme').value;
    var family = document.getElementById('font-family').value;
    if (texto ) {
        var Text = new fabric.Text(texto, {
        fontSize: 40,  
        left:canvas.width/3 ,
        stroke: '#c3bfbf',
        strokeWidth:0.5,
        top: 100,
        textAlign:'left',
        cornerStyle: 'circle',
        cornerSize: 20,
        });
    canvas.add(Text);
  }
  document.getElementById('textomeme').value="";    
}
$("#Editartext").click(function(){
  var obj = canvas.getActiveObject();
  if(canvas.getActiveObject())
  if(obj.get('type')=='text'){
    document.getElementById('text-cont').value=obj.getText();
    $("#modaleditar").modal();
  }else{
      navigator.notification.alert("Seleccione un texto para editar. ", alertCallback, "Editar texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
   else
    {  navigator.notification.alert("Seleccione un texto para editar. ", alertCallback, "Editar texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
    }
});
$('#text-cont').keyup(function() {
    var obj = canvas.getActiveObject();
  if (obj) {      
      obj.setText($(this).val());
      canvas.renderAll();  
  }
});


document.getElementById('font-family').onchange = function() {
  canvas.getActiveObject().setFontFamily(this.value);
  canvas.renderAll();
}; 
     
$('#Izquierda').click(function(){
  var obj = canvas.getActiveObject();
  if(canvas.getActiveObject())
  if(obj.get('type')=='text'){

  canvas.getActiveObject().setTextAlign('left');
  canvas.renderAll();
  }else{
      navigator.notification.alert("Seleccione un texto para alinear. ", alertCallback, "Alinear texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
   else
    {  navigator.notification.alert("Seleccione un texto para alinear. ", alertCallback, "Alinear texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
    }
});
$('#Centrar').click(function(){
  var obj = canvas.getActiveObject();
  if(canvas.getActiveObject())
  if(obj.get('type')=='text'){
  canvas.getActiveObject().setTextAlign('center');
  canvas.renderAll();
  }else{
      navigator.notification.alert("Seleccione un texto para alinear. ", alertCallback, "Alinear texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
   else
    {  navigator.notification.alert("Seleccione un texto para alinear. ", alertCallback, "Alinear texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
    }
});
$('#Derecha').click(function(){
  var obj = canvas.getActiveObject();
  if(canvas.getActiveObject())
  if(obj.get('type')=='text'){
  canvas.getActiveObject().setTextAlign('right');
  canvas.renderAll();
  }else{
      navigator.notification.alert("Seleccione un texto para alinear. ", alertCallback, "Alinear texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
   else
    {  navigator.notification.alert("Seleccione un texto para alinear. ", alertCallback, "Alinear texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
    }
});




var estado=0;
$('.colort').click(function(){

  var obj = canvas.getActiveObject();
  if(canvas.getActiveObject())
  if(obj.get('type')=='text'){

  if(estado==0){
      colorTexto('img/colortexto/textoamarillo.png',"#FFF700");
       estado=estado+1; 
    }else if(estado==1){
      colorTexto('img/colortexto/textoverde.png',"#78FF00");
      estado=estado+1; 
    }else if(estado==2){
        colorTexto('img/colortexto/textorojo.png',"#FF0000");
        estado=estado+1;
    }else if(estado==3){
        colorTexto('img/colortexto/textomorado.png',"#D500FF");
        estado=estado+1;
    }else if(estado==4){
      colorTexto('img/colortexto/textorosado.png',"#FF00D4");
      estado=estado+1;  
    }else if(estado==5){
      colorTexto('img/colortexto/texto.png',"#FFFFFF");
      estado=estado+1;  
    }else if(estado==6){
          colorTexto('img/colortexto/textonegro.png',"#000000");
          estado=0;
    }
    
  }else{
      navigator.notification.alert("Seleccione un texto para colorear. ", alertCallback, "Color para texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
   else
    {  navigator.notification.alert("Seleccione un texto para colorear. ", alertCallback, "Color para texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
    }




}); 

$('#nocolor').click(function(){

  var obj = canvas.getActiveObject();
  if(canvas.getActiveObject())
  if(obj.get('type')=='text'){

   $(".colorf").attr('src','img/colortexto/colorftexto.png');
          canvas.getActiveObject().setTextBackgroundColor("");
          canvas.renderAll();

}else{
      navigator.notification.alert("Seleccione un texte para quitar fondo. ", alertCallback, "Sin fondo", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
   else
    {  navigator.notification.alert("Seleccione un texto para quitar fondo. ", alertCallback, "Sin fondo ", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
    }
  
});

$('.colorf').click(function(){
  var obj = canvas.getActiveObject();
  if(canvas.getActiveObject())
  if(obj.get('type')=='text'){
  if(estado==0){
        colorFondo('img/colortexto/fondoamarillo.png',"#FFF700");
        estado=estado+1;
    }else if(estado==1){
        colorFondo('img/colortexto/fondoverde.png',"#78FF00");
        estado=estado+1;
    }else if(estado==2){
        colorFondo('img/colortexto/fondorojo.png',"#FF0000");
        estado=estado+1;
    }else if(estado==3){
        colorFondo('img/colortexto/fondomorado.png',"#D500FF");
        estado=estado+1;
    }else if(estado==4){
        colorFondo('img/colortexto/fondorosado.png',"#FF00D4");
        estado=estado+1;
    }else if(estado==5){ 
        colorFondo('img/colortexto/colorftexto.png',"#FFFFFF");
         estado=estado+1; 
    }else if(estado==6){
        colorFondo('img/colortexto/fondonegro.png',"#000000");
          estado=0;
    } 
  }else{
      navigator.notification.alert("Seleccione un texto para colorear. ", alertCallback, "Color para fondo", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
   else
    {  navigator.notification.alert("Seleccione un texto para colorear. ", alertCallback, "Color para fondo", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
    }
  
});

function colorFondo(img,colorfondo){
  $(".colorf").attr('src',img);
  canvas.getActiveObject().setTextBackgroundColor(colorfondo);
  canvas.renderAll();
}
function colorTexto(img,colortexto){
  $(".colort").attr('src',img);
  canvas.getActiveObject().setFill(colortexto);
  canvas.renderAll();
}

$.ajax({
   type: "POST",
   dataType: "json",
   async : false,
   url: "https://ponchisponchis.com/Appmeme/imagenes.php",
   beforeSend:function(){

                $('.estado').html("Cargando...");
   },
   success:function(result){
    $('.estado').hide();
    var fondos;
    var personajes;
    var globos;
    $.each(result, function(i,filename) {
        var letra =filename.charAt(0);
        if (letra=="f") {
            fondos+="<li><a class='thumbnail'><img style='width:100px;' src='https://ponchisponchis.com/Appmeme/img/"+ filename +"' class='agregafondo' ></a></li>"; 
        } 
        if (letra=="p") {
            personajes+="<li><a class='thumbnail'><img src='https://ponchisponchis.com/Appmeme//img/"+ filename +"' class='agregapersonaje resize-image' ></a></li>";            
         }
        if (letra=="g") {
            globos+="<li><a class='thumbnail'><img src='https://ponchisponchis.com/Appmeme//img/"+ filename +"' class='agregaglobo resize-image' ></a></li>";
        }
    });
     $('#mostrarf').html(fondos);
     $('#mostrarp').html(personajes);
     $('#mostrarg').html(globos);
   },
  }).fail(function() {
    $('.estado').hide();
    $('#mostrarf').html("<li><a class='thumbnail'><img  style='width:100px;' src='img/fondos/verdeclaro.png'  class='agregafondo' ></a></li><li><a class='thumbnail'><img  style='width:100px;' src='img/fondos/azulclaro.png'  class='agregafondo' ></a></li><li><a class='thumbnail'><img  style='width:100px;' src='img/fondos/amarilloclaro.png'  class='agregafondo' ></a></li><li><a class='thumbnail'><img  style='width:100px;' src='img/fondos/blanco.png'  class='agregafondo' ></a></li>");
    $('#mostrarp').html("<li><a class='thumbnail'><img  src='img/personajes/PPRoger Federer.png'  class='agregapersonaje' ></a></li><li><a class='thumbnail'><img  src='img/personajes/PPBARACK OBAMA.png'  class='agregapersonaje' ></a></li>");
    $('#mostrarg').html("<li><a class='thumbnail'><img src='img/globos/1.png'  class='agregaglobo' ></a></li><li><a class='thumbnail'><img  src='img/globos/2.png'  class='agregaglobo' ></a></li><li><a class='thumbnail'><img  src='img/globos/3.png'  class='agregaglobo' ></a></li><li><a class='thumbnail'><img  src='img/globos/5.png'  class='agregaglobo' ></a></li>");
  });




