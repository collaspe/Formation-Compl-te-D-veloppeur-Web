/*Boulean :
- true 
- false

2eme cas : 
var x = 5;
var myBoolean = (x===5); ça veut dire est-ce que x = 5 ? donc là oui donc return true
var myBoolean = (x!==5); là ça return false

var x = 5;
var myBoolean = (x==="5");
on demande si x est STRICTEMENT EGAL (===) à "5" donc oui numeriquement, mais non sur le type de variable, donc ici ça return false

var x = 5;
var myBoolean = (x>12); ici ça return false

var x = 5;
var y = 12;
var myBoolean = (x>3 && y<15); On veut savoir si x>3 ET y<15 donc ici il return true

var x = 5;
var y = 12;
var myBoolean = (x>3 || y<10); On veut savoir si x>3 OU y<10 et donc là oui ça return true car x>5 même si y n'est pas inférieur à 10
*/



var x = 5;
var y = 12;
var myBoolean = (x>3 || y<15);

console.log(myBoolean);
console.log("---------------------------");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log("---------------------------");
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log("---------------------------");
console.log(!true); //false
console.log(!false); //true