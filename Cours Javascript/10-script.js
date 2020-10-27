/*
Array :
var nom = [valeur1, valeur2, valeur3];
*/

var fruits = ["pomme", "banane", "orange", "citron"];
console.log(fruits.length); //Retourne la taille du tableau, ici on a 4 valeurs dedans donc 4
console.log(fruits[0]); //Affiche juste pomme
console.log(fruits); //Affiche toutes les valeurs du tableau sous la forme tableau

for(var i=0; i < fruits.length; i++){
    console.log(fruits[i]);
} //Affiche toutes les valeurs du tableau mais chaque valeur est sous format texte les uns apres les autres

fruits.push("kiwi"); //Fonction pour rajouter des valeurs dans le tableau
console.log(fruits);
fruits.pop(); //Enlever la derniere valeur du tableau, ici Kiwi
console.log(fruits);

var agrumes = fruits.slice(2,4); //agrumes est un tableau qui recupere les valeurs du tableau fruits via la fonction "slice". Dans ses parametres, on part de la 3eme case jusqu'à la 4eme case NON INCLUE donc on recupere orange & citron. Si on avait kiwi on l'aurai pas recuperer. Il aurait falu mettre (2,5)
console.log(agrumes);
var agrumes2 = fruits.slice(2); //On recupere toutes les valeurs du tableau fruits à partir de la 3eme case  et pas ce qu'il y a avant
console.log(agrumes2);

var monTableau = ["Pomme", 15, true];
console.log(monTableau);
var monTableau2 = [[0,1], [5,7,8], [12,18]];
console.log(monTableau2);
console.log(monTableau2[1][1]); // Pour recuperer "7"