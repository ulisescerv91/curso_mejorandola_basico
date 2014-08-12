/*var menu=["Producto","Ventas","Contacto"];
document.write(menu );
alert(menu[0]);*/

function explosicion(){
	document.write("<h1>Booom!! Perdiste...</h1>");
}
function ganaste(){
	document.write("<h1>Ganaste</h1>");
}
//1=bomba
//0 no bomba
var campo=[ [1,0,0],
			[0,1,0],
			[1,1,1] ];
var x,y;
alert("CAMPO-MINADO elige una posicion");
x=prompt("Posicion X",0);
y=prompt("Posicion Y",0);
 
 //solo para poner si piso bomba o no
var texto=["Te salvaste","bomba"];

//comprobar si la posiciono del usuario esta dentro de los parametros del campo
//es menor a  3, ya que el campo es de 2x2
if(x<3 && y<3){
	//guardar la posisicon que  de campo,si elegiste un 1 o un 0
	var posicion=campo[x][y];
	document.write("elegiste "+texto[posicion]);
	if(campo[x][y]==1)
		explosicion();
	else
		ganaste();
		
}
else{
	document.write("<p>Te salite del campo</p>")
	explosicion();
}





/*
if(campo[1][0]==0)
	explosicion();
else
	ganaste();
*/

