var c,caja,bot;

function inicio(){
	var c=document.getElementById("caja");
	/*seleccionar el contenido del elemento llamandolo por su ID*/
	
	/*% para obtener el residuo de una division*/

	/*Imprime numero pares*/
	var numero=1;
	var residuo;
	while(numero<=50){
		residuo=numero%2;
		if(residuo==0)
		{
			c.innerHTML+="-"+numero;
		}
		numero++;

	}
}

function calcular(){
	 c=document.getElementById("caja");
	 caja=document.getElementById("txtbox");
	 bot=document.getElementById("botones")
	/*addEventListener("click",calcular) para cuando se dispare un evento,
	espera 2 parametros,el primero la accion, y la segunda la funcion*/
	bot.addEventListener("click",hacercuenta);
	/*hacercuenta, no se pone () porq se esta menejrando como variable*/

}

function hacercuenta()
{
	/*NUMBER(VARIABLE)*/

	var numero = Number(caja.value);
	var suma=numero+5;
	c.innerHTML=numero+"+"+"5"+"="+suma;

}


/*dibujando  con JS*/

