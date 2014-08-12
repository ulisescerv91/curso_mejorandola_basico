//document  object model

/*
var salud0="Hola!";
var pi=3.141534534;
//math.floor es para redondear
pi=Math.floor(pi);
document.write(pi);
*/

/*
//math.max de el numero max de una serie de numeros
var maxima=Math.max(1,5,76,2,65,1,0,9,107,2,4);

document.write(maxima);
*/

//para sacar las cordenadas de dond e estoy
//ver imagen



//variables de asignacion por valor
//variables de asignacion por referencia

//this: el valos que esta dentro de las llaves





/*
function Pokemon(nombrePokemon,vidaPoke,ataPoke){

	var estructuraPokemon={
		nombre:nombrePokemon,
		vida:vidaPoke,	
		ataque:ataPoke,
		datos:{tipo:"tierra",debilidad:"Fuego"}
	};
	return estructuraPokemon;
}

var pikachu=Pokemon("Pikachu",100,50);
var bulbasaur=Pokemon("Bulbasaur",90,50);



document.write(pikachu.vida);
consol.log(pikachu);
*/


//otra forma correcta de crear una function
function Pokemon1(n,v,a){
	this.nombre=n,
	this.vida=v,
	this.ataque=a,
	this.gritar=function(){
		alert(this.grito)
	}
}

//

//forma correcta de crear un objeto
var pikachu2= new Pokemon1("Ratata",40,2);
Ratata.grito="paredes";