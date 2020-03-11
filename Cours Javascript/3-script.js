//L'affichage, dans la console developpeur, des strings est en noir
//L'affichage, dans la console developpeur, des nombres sont en violet

//Variable string (chaine de caracteres)
var name = "Ben";

//Variable nombre
var x = 12;
var y = 25.63;

//Utilisation d'une fonction "toString()" pour convertir notre variable nombre en variable de caracteres
var xToString = x.toString();

//Longueur d'une string
var nameLength = name.length;

//Conversion d'un string comprenant des nombres en nombre entier
var xString = "12";
var xNumber = parseInt(xString);

//Même chose avec un nobmre a virgule (decimal)
var yString = "12";
var yNumber = parseFloat(yString);

//Retrouver la position du mot Ben, ici il se place sur le B
var myString = "Hello Ben";
var position = myString.indexOf("Ben");

//Remplacer un mot par un autre (fonction replace)
var myString2 = "Hello Ben";
var myNewString = myString2.replace("Ben", "Vanderhaegen");

//Assembler du texte (ne pas oublier de rajouter un espace pour pas coller le texte)
var string1 = "Hello";
var string2 = "Ben";
var myNewString2 = string1 + " " + string2 ;

//Affichage des résultats des variables
console.log(name);
console.log(x);
console.log(y);
console.log(xToString);
//Affichage de la taille du string en nombre, variable nombre
console.log(nameLength);
//Affichage du string converti en INT (nombre entier, si on veut convertir un nombre a virgule c'est parseFloat)
console.log(xNumber);

//Affichage du string converti en Float
console.log(yNumber);

//affichage de la position du mot Ben
console.log(position);

//Affichage du Hello Ben mais Ben remplacé par Vanderhaegen
console.log(myNewString);