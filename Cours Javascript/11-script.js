/*
var objet = {
        propertyName1: propertyValue1,
        propertyName2: propertyValue2,
        method1 : function() {

        }
        };

*/
/*1ere façon de déclarer un objet*/
var dog = {
name: "Choupette",
color: "white",
age:4
};

console.log(dog.age); //Affiche l'âge du chien
console.log(dog["name"]); //2eme façon d'afficher un résultat d'une variable de l'objet

for(var property in dog){
    console.log(dog[property]); //Affichage de toutes les propriétés de dog via la variable property qui recupere chaque valeur de dog 1 par 1 dans le for
}

/*2eme façon  de déclarer un objet*/
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

chien.aboie(4); //Execution de la fonction

for(var property in chien){
    console.log(chien[property]); //Affichage de toutes les propriétés de chien via la variable property qui recupere chaque valeur de chien 1 par 1 dans le for
}