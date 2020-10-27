function multiplier(nombre1,nombre2,nombre3){
    var resultatMultiplier = nombre1*nombre2*nombre3; //La variable resultatMultiplier est créée dans la fonction donc n'existe pas à l'exterieure de la fonction
    resultatMultiplierGlobal = nombre1*nombre2*nombre3; //Cette variable est une variable global, elle ne contient pas "var" devant elle. Elle est utilisable en dehors de cette fonction
    /* return resultatMultiplier; */
    return resultatMultiplierGlobal;

}

var a = 5;
var b = 6;

var resultat = multiplier(a,b,a); //Utilisation de notre fonction créée
console.log(resultatMultiplier); //retournera une erreur car resultatMultiplier est une variable de la fonction, et pas une variable externe à la fonction
console.log(resultatMultiplierGlobal); //Fonctionne mais pas conseillé