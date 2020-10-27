/*Opérateurs :
- "=" sert a mettre une valeur dans une variable
- "%" c'est le modulo, donc le reste de la division de x par y
- "++" comme quand on fait i++, on rajoute 1 a i (i + 1)
- "--" pareil que ++ mais -1




*/

//Premiere partie de video
var x = 12;
var y = 5;
var result;

//Si on veut que result = 13 alors on met : 
var result2 = ++x; //et non x++ ça ne marche pas

console.log(result);

//Deuxieme partie

var a = 12;
var b = 5;
a += 1;

a += b; //Ici ça veut dire x + y = nouveau x

console.log(a);

//Troisième partie
var string1 = "Hello";
var string2 = "Ben";

console.log(string1 + " " + string2);