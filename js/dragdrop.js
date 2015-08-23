function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("content",ev.target.id);
}
var cuentadrop = 0;

function drop(ev)
{
ev.preventDefault();
var image=ev.dataTransfer.getData("content");
var auximage=image+'Img';
 if ( auximage == ev.target.id) {
ev.target.appendChild(document.getElementById(image));
    cuentadrop++;   
    if (cuentadrop == 4)  //si el contador de drops llega a 4 muestra el boton siguiente
                  { 
                     $('#next60').show();
                  }
}
}