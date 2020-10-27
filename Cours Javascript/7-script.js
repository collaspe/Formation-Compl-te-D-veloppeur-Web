/*
    while : tant que [condition] on execute le code
    do while : pareil que le while mais le do while possède un tour gratuit dès le debut, donc si number = 4 il va quand même executer une fois le do
*/

var number = 0;

while(number<3){
    console.log(number);
    number++;
}

do{
    console.log(number);
    number++;
}while(number> 1 && number<3) //Le code va s'executer une fois quand même car il rentre dans le do puis verifie la condition

/*
for(partie1;partie2;partie3){
    Code à executer
}

partie1 : initialisation de ma variable + execution d'une première fois la boucle
Partie2 : condition
partie3 : après vérification de la condition, j'execute et met à jour le code et ma variable

partie 1 executer en premier, puis execution de la condition donc on execute le code de la boucle, puis on execute la partie 3, puis on execute la partie 2 puis la partie 3 puis 2 puis 3 etc... jusqu'à ce que la partie 2 n'est plus respectée.
*/

for(var number = 0; number < 5; number++){
    console.log(number);
}