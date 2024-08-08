ReferenceErrorcanvas = document.getElementById("canvas");
lapiz = canvas.getContext("2d");
colorear = 0

canvas.addEventListener("mousedown",empanadas2) // comenzar a dibujar
canvas.addEventListener("mousemove",dibujar)
canvas.addEventListener("mouseup",noserick)

function empanadas2(evento){
  figura = document.getElementById("figura").value
  if(figura == "lapiz"){
    colorear = 1
  }
  if(figura == "circulo"){
    colorear = 1
    dibujar(evento)
  }
}

function dibujar(evento){
  if(colorear == 1){
    mousex = evento.clientX - canvas.offsetLeft;
    mousey = evento.clientY - canvas.offsetTop;
    color=document.getElementById("color").value;
    tamaño=document.getElementById("tamaño").value;
    circulo(tamaño, color, mousex, mousey)
  }
}

function noserick(evento){
  colorear = 0
}

function circulo(tamaño,color,x,y){
  lapiz.fillStyle = color;
  lapiz.lineWidth =20 ;
  lapiz.beginPath();
  lapiz.arc(x, y, tamaño, 0, 2 * Math.PI);
  lapiz.fill();
}
