
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
  $(".Colorf").attr('src',"img/colortexto/colorftexto.png");
  $(".Colort").attr('src',"img/colortexto/textonegro.png");
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
    //colorFondo(imgfondo,colorfondo);

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
 var obj = canvas.getActiveObject();
$('#Izquierda').click(function(){
  if(canvas.getActiveObject().get('type')=='text'){
  canvas.getActiveObject().setTextAlign('left');
  canvas.renderAll();
  }else{
      navigator.notification.alert("Seleccione un texto para alinear. ", alertCallback, "Alinear texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
});
$('#Centrar').click(function(){
  if(canvas.getActiveObject().get('type')=='text'){
  canvas.getActiveObject().setTextAlign('center');
  canvas.renderAll();
  }else{
      navigator.notification.alert("Seleccione un texto para alinear. ", alertCallback, "Alinear texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
});
$('#Derecha').click(function(){
  if(canvas.getActiveObject().get('type')=='text'){
  canvas.getActiveObject().setTextAlign('right');
  canvas.renderAll();
  }else{
      navigator.notification.alert("Seleccione un texto para alinear. ", alertCallback, "Alinear texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
});

var estado=0;
$('.Colort').click(function(){
  if(canvas.getActiveObject().get('type')=='text'){

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
      navigator.notification.alert("Seleccione un texto y agregue color. ", alertCallback, "Color para texto", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");




}); 


$(".Nocolor").click(function(){
  
  if(canvas.getActiveObject().get('type')=='text'){
     colorFondo("img/colortexto/colorftexto.png","rgba(255,0,0,0)");

   }else{
      navigator.notification.alert("Seleccione un texto para quitar fondo. ", alertCallback, "Sin fondo", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
});

$('.Colorf').click(function(){
  
  if(canvas.getActiveObject().get('type')=='text'){
  if(estado==0){
      colorFondo("img/colortexto/fondoamarillo.png","#FFF700");
      estado=estado+1;
    }else if(estado==1){
      colorFondo("img/colortexto/fondoverde.png","#78FF00");
      estado=estado+1;
    }else if(estado==2){
        colorFondo("img/colortexto/fondorojo.png","#FF0000");
        estado=estado+1;
    }else if(estado==3){
        colorFondo("img/colortexto/fondomorado.png","#D500FF");
        estado=estado+1;
    }else if(estado==4){
        colorFondo("img/colortexto/fondorosado.png","#FF00D4");
        estado=estado+1;
    }else if(estado==5){ 
        colorFondo("img/colortexto/colorftexto.png","#FFFFFF");
         estado=estado+1;
    }else if(estado==6){ 
        colorFondo("img/colortexto/fondonegro.png","#000000");
         estado=0;
    } 
  }else{
      navigator.notification.alert("Seleccione un texto y agregue color de fondo. ", alertCallback, "Color para fondo", "Aceptar");
      function alertCallback() {
      //console.log("Alert is Dismissed!");
      }  
  }
   // alert("Selecione un texto");
  
});

function colorFondo(img,colorfondo){
  $(".Colorf").attr('src',img);
  canvas.getActiveObject().setTextBackgroundColor(colorfondo);
  canvas.renderAll();
}
function colorTexto(img,colortexto){
  $(".Colort").attr('src',img);
  canvas.getActiveObject().setFill(colortexto);
  canvas.renderAll();
}
var conexion=0;
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
     conexion=1;
   },
  }).fail(function() {
    $('.estado').hide();
    $('#mostrarf').html("<li><a class='thumbnail'><img  style='width:100px;' src='img/fondos/verdeclaro.png'  class='agregafondo' ></a></li><li><a class='thumbnail'><img  style='width:100px;' src='img/fondos/azulclaro.png'  class='agregafondo' ></a></li><li><a class='thumbnail'><img  style='width:100px;' src='img/fondos/amarilloclaro.png'  class='agregafondo' ></a></li><li><a class='thumbnail'><img  style='width:100px;' src='img/fondos/blanco.png'  class='agregafondo' ></a></li>");
    $('#mostrarp').html("<li><a class='thumbnail'><img  src='img/personajes/PPRoger Federer.png'  class='agregapersonaje' ></a></li><li><a class='thumbnail'><img  src='img/personajes/PPBARACK OBAMA.png'  class='agregapersonaje' ></a></li>");
    $('#mostrarg').html("<li><a class='thumbnail'><img src='img/globos/1.png'  class='agregaglobo' ></a></li><li><a class='thumbnail'><img  src='img/globos/2.png'  class='agregaglobo' ></a></li><li><a class='thumbnail'><img  src='img/globos/3.png'  class='agregaglobo' ></a></li><li><a class='thumbnail'><img  src='img/globos/5.png'  class='agregaglobo' ></a></li>");
  conexion=0;
  });
/*
const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))
*/
$(".agregapersonaje" ).on( "click", function() {
    var personaje=document.getElementById("image").src=this.src;
    var ObjetoImagen = new Image();
    ObjetoImagen.crossOrigin = 'anonymous';
    ObjetoImagen.onload = function(){     
    var f_img = new fabric.Image(ObjetoImagen);
    canvas.add(f_img.set({ left:canvas.width/1.3, top:canvas.height/2, angle:0, cornerStyle: 'circle', cornerSize: 20, }).scale(0.35));
  }

  ObjetoImagen.src = personaje; 
  /*if (conexion==0) {
    ObjetoImagen.src = personaje; 
  }else
  {
  toDataURL(personaje)
  .then(dataUrl => {
    //console.log('RESULT:', dataUrl)
     ObjetoImagen.src = dataUrl; 
  }) 

  } 
  */  
});

$(".agregaglobo" ).on( "click", function() {
  document.getElementById("image").src=this.src;
  $("#modalglobo").modal();
});

function agregarGlobos(){ 
  var cantidad;
  var textglobo = document.getElementById('textoglobo').value;
  if (textglobo) {
    var valor= $('input:radio[name=optradio]:checked').val();
    if (valor=="1") {
      cantidad=canvas.width-100;
    }else  
    cantidad=10;
    var ObjetoImagen = new Image();
    ObjetoImagen.onload = function(){ 
      var f_img = new fabric.Image(ObjetoImagen);
      canvas.add(f_img.set({ left:cantidad, top:100, angle:0, cornerStyle: 'circle',cornerSize: 20, }).scale(0.15));  
      var texto = new fabric.Text(textglobo, {
        padding:0,
        fontSize:f_img.getBoundingRectHeight() /8,
        left:cantidad,
        cornerStyle: 'circle',
        cornerSize: 20,
        top:100
      });
      canvas.add(texto);
    };
    ObjetoImagen.src =document.getElementById("image").src; 
    /*
    if (conexion==0) {
      ObjetoImagen.src =document.getElementById("image").src; 
    }else{
      toDataURL(document.getElementById("image").src)
  .then(dataUrl => {
    //console.log('RESULT:', dataUrl)
     ObjetoImagen.src = dataUrl; 
    })
    }*/
  //ObjetoImagen.src = document.getElementById("image").src; 
    //document.getElementById('text-cont').value=document.getElementById('textoglobo').value;
  }
  document.getElementById('textoglobo').value="";
}

$(".agregafondo" ).on( "click", function() {
  var fondo=document.getElementById("image").src=this.src; 
  GenerarMeme(fondo);
  /*
  if (conexion==0) {
  GenerarMeme(fondo);
  }else
  {
  toDataURL(fondo)
  .then(dataUrl => {
    //console.log('RESULT:', dataUrl)
    GenerarMeme(dataUrl);    
  })
  }*/

});

f = fabric.Image.filters;
function GenerarMeme(fondos){
  //$(".Editar").prop('disabled', false);
  //fbandera=1;
  ObjetoImagen = new Image();
  //imgObj.src = url + '?' + new Date().getTime();
  ObjetoImagen.crossOrigin = 'anonymous'; 
  //ObjetoImagen.onerror = function() { console.log("cross-origin image load error"); }
  ObjetoImagen.src = fondos;
  original.src=  ObjetoImagen.src; 
  filtro.src=  ObjetoImagen.src;
  filtro1.src=  ObjetoImagen.src;
  filtro2.src=  ObjetoImagen.src;
  filtro3.src=  ObjetoImagen.src;
        //filtro4.src=document.getElementById("image").src;
  ObjetoImagen.onload = function(){
    var f_img = new fabric.Image.fromURL(ObjetoImagen.src, function( ObjetoImagen ){                
      ObjetoImagen.width = canvas.width;
      ObjetoImagen.height = canvas.height;
      canvas.setBackgroundImage(ObjetoImagen);
      canvas.renderAll();
      
      function removefilter(){
        ObjetoImagen.filters = []; 
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      }
      $('#original').click(function(){
        removefilter();
      });
      $('#filtro').click(function(){      
        removefilter();
        ObjetoImagen.filters.push(new fabric.Image.filters.Grayscale());
        // apply filters and re-render canvas when done
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
        canvas.add(ObjetoImagen);
      });
      $('#filtro1').click(function(){
        removefilter();
        ObjetoImagen.filters.push(new fabric.Image.filters.Invert());
       // apply filters and re-render canvas when done
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas)); 
        canvas.add(ObjetoImagen);
      });
      $('#filtro2').click(function(){
        removefilter();
        ObjetoImagen.filters.push(new fabric.Image.filters.Sepia2());
        // apply filters and re-render canvas when done
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
        canvas.add(ObjetoImagen);
      });
      $('#filtro3').click(function(){
        removefilter();
        ObjetoImagen.filters.push(new fabric.Image.filters.Convolute({
        matrix:[ 1/9, 1/9, 1/9,
               1/9, 1/9, 1/9,
                1/9, 1/9, 1/9 ]
        }));
        // apply filters and re-render canvas when done
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
        canvas.add(ObjetoImagen);
      });
      
      $('.Brillo').on('click', function() {
          //var obj = canvas.getActiveObject();
        ObjetoImagen.filters[5] = new f.Brightness({brightness: parseInt($('#brillorango').val(),10)});
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
       
      $('.Combinar').on('click', function() {
          //var obj = canvas.getActiveObject();
        ObjetoImagen.filters[5] = new f.Brightness({brightness: parseInt($('#brillorango').val(),10)});
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('#brillorango').on('change', function() {
        //var obj = canvas.getActiveObject();
        ObjetoImagen.filters[5]['brightness'] = parseInt($(this).val(),10);
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas)); 
      });                
      $('.Transparencia').on('click', function() {
        ObjetoImagen.filters[7] = new f.GradientTransparency({threshold: parseInt($('#transparenciarango').val(),10)});
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('#transparenciarango').on('change', function() {
        ObjetoImagen.filters[7]['threshold'] = parseInt($(this).val(),10);
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas)); 
      }); 
      $('.Pixel').on('click', function() {
        ObjetoImagen.filters[8]= new f.Pixelate({ blocksize:parseInt($('#pixelrango').val(),10)});
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('#pixelrango').on('change', function() {
        ObjetoImagen.filters[8]['blocksize']=parseInt($(this).val(),10);
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('.Opacidad').on('click', function() {
        ObjetoImagen.filters[12] = new f.Tint({opacity: parseFloat($('#opacidadrango').val())});
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));                   
       //ObjetoImagen.filters[7] = new f.Saturation({saturation: parseFloat($('#tint-opacity').val())});
        //ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));                    
      });
      $('#opacidadrango').on('change', function() {                  
        ObjetoImagen.filters[12]['opacity']=parseFloat($(this).val());
        //ObjetoImagen.filters[7]['saturation']=parseFloat($(this).val());
       //applyFilterValue(6, 'contrast', parseFloat(this.value));
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });              
    });
  };
};
    

