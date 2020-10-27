/*

if(condition) {
    Execute le code
} else if (condition2) {
    Si c'est faux mais la condition est vraie alors fait le code du else if
} else { (MAIS SI LE IF N'EST PAS BON ALORS EXECUTE ELSE)
    Execute ce code
}


exemple 1 :

var speeed = 70;

if(speed<80){
    console.log("Tu roules à la bonne vitesse") 
} else if (speed<100) {
    console.log("Il faut que tu ralentisses un petit peu")
} else {
    console.log("Tu roules beaucoup trop vite, c'est dangereux")
}

Ici le résultat du if s'affichera car on est en dessous de 80, on execute qu'une des 3 conditions dans un if

exemple 2 :
var speeed = 90;

if(speed<80){
    console.log("Tu roules à la bonne vitesse")
} else if (speed<100) {
    console.log("Il faut que tu ralentisses un petit peu")
} else {
    console.log("Tu roules beaucoup trop vite, c'est dangereux")
}
Ici le résultat du else if s'affichera car on est pas en dessous de 80, on est en dessous de 100 & on est pas au dessus de 100

exemple 3 : 
var speeed = 110;

if(speed<80){
    console.log("Tu roules à la bonne vitesse")
} else if (speed<100) {
    console.log("Il faut que tu ralentisses un petit peu")
} else {
    console.log("Tu roules beaucoup trop vite, c'est dangereux")
}

Il execute le else

Imbriquation des if : 
var speeed = 40;

if(speed<80){
    if(speed<50) {
        console.log("Acceleres un petit peu");
    } else {
        console.log("Tu roules à la bonne vitesse")
    }
} else if (speed<100) {
    console.log("Il faut que tu ralentisses un petit peu")
} else {
    console.log("Tu roules beaucoup trop vite, c'est dangereux")
}

switch :
switch(variable) {
    case 1:
        console.log("execute ça");
        break;
    case 2:
        break;
    default:
}
*/

var favoriteColor = "grey";

switch(favoriteColor) {
    case "yellow": //Si on rentre dans yellow ça execute le code du blue car on a pas mis de break entre 2
    case "blue":
        console.log("Woah le bleu c'est trop beau");
        break;
    case "red":
        console.log("Le rouge c'est pas ouf");
        break;
    default:
        console.log("Je ne connais pas la couleur "+favoriteColor);
}