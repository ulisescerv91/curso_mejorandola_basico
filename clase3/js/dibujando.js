var dibujo,lienzo;

function inicio(){

	


	dibujo=document.getElementById("cuadro");
	/*se nesesita tener contexto para poder dibijur en canvas*/
	lienzo=dibujo.getContext("2d");/*para poder dibujar en cordenadas*/

	dibujarGrilla(lienzo);



	/*moverse a 100px to 100px*/
	lienzo.moveTo(100,100);
	/*escride de 200 a 100*/
	lienzo.lineTo(200,100);
	/*color con el que voy a dibujar*/
	lienzo.strokeStyle="#444";
	/*Stroke pinzelada o trazo.. esto para ya pintar*/
	lienzo.stroke();
/*para volver  a dibujar*/
	lienzo.beginPath();
	lienzo.strokeStyle="#00F";
	/*para dibujar un circulo*/
	/*nos posamos en la pocicion donde queremos dibujar*/
	/*3,1416 dibuja medio circulo*/
	/*o podemos utilizar el pi de js math.pi*/
	lienzo.arc(150,150,100,Math.pi,false);
	lienzo.closePath();
	lienzo.stroke();
	/*grilla*/





}

function dibujarGrilla(l){
	/*l es lienzo*/
	var ancho=300;/*vallores del canvas*/
	var alto=300;
	var lineas=10;/*cada cuantos pixeles quiero la linea*/
	var limiteX=ancho/lineas;
	var limiteY=alto/lineas;
	for(lineas=0;lineas<=limiteX;lineas++){
		l.beginPath();/*para poder hacer lineas independientes*/
		l.strokeStyle="#AAA";
		l.moveTo(lineas*10,0);//me salta 10 px
		l.lineTo(lineas*300,0);//crear linea de 0 a 300
		l.closePath();
		l.stroke();
		
		
	}	

		for(lineas=0;lineas<=limiteY;lineas++){
		l.beginPath();
		l.strokeStyle="#AAA";/*color de linea*/
		l.moveTo(lineas*10,0);//me salta 10 px
		l.lineTo(lineas*300,0);//crear linea de 0 a 300
		l.stroke();
		l.closePath();/*para que vuelva a empezar desde cero el moveTo*/
		
	}	
}



