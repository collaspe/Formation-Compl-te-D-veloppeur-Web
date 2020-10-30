/* Fonctions constructeurs
- Premiere partie : quand on veut creer un objet, de base on va creer objet chien1, puis objet chien2 etc...
- Deuxiement partie : on creer un objet qu'on initialise via la fonction constructeur, et on peut creer plein d'objets via l'objet générique de chien
*/


//Premiere partie
var chien = new Object();
chien.name = "Shadow";
chien.color = "Noir";
chien.color = 11;
chien.aboie = function(number){
    while(number>0){
        console.log(number.tostring() + "Wouaf wouaf");
        number--;
    }
}; //Declaration d'une fonction dans un objet


var chien2 = new Object();
chien2.name = "Shadow";
chien2.color = "Noir";
chien2.color = 11;
chien2.aboie = function(number){
    while(number>0){
        console.log(number.tostring() + "Wouaf wouaf");
        number--;
    }
}; //Declaration d'une fonction dans un objet


//Deuxieme partie
function dog(name,color,age){
    this.name = name; //Quand on va utiliser la fonction, on va declarer un nom dans la fonction, donc ici la variable du constructeur name va prendre la valeur du nom qu'on va donner dans la parenthese quand on va utiliser la fonction
    this.color = color;
    this.age = age;
    this.aboie = function(){
        console.log("Wouaf " + this.name);
    }
}

var labrador = dog("Shadow","noir",11); //this.name = labrador.name
var bergerAllemand = dog("Rex", "marron", 5); // this.name = berger.Allemand
console.log(labrador);
console.log(bergerAllemand);

labrador.aboie();
bergerAllemand.aboie();