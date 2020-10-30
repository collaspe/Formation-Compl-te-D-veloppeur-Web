/* JEU SNAKE 
- Revoir vidéo 19 de la formation en JS

*/


//Fonction qui va s'executer quand la page html va s'afficher
window.onload = function(){
    var canvas;
    var canvasWidth = 900;
    var canvasHeight = 600;
    var contexte;
    var blockSize = 30;
    var delais = 100; //1sec
    var xCoord = 0;
    var xCoord = 0;
    var serpentard;

    init();

    function init(){ //Initialisation du canvas
        canvas = document.createElement('canvas'); //Canvas est la structure pour faire le jeu (sa fenetre)
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas); //document permet de tapper dans le fichier html et d'aller chercher l'attribut body et appendChild permet de transferer notre canvas en html
        contexte = canvas.getContext('2d');
        serpentard = new snake([[6,4],[5,4],[4,4]]);
        refreshCanvas();
    }

    function refreshCanvas(){
        contexte.clearRect(0,0,canvas.width,canvas.height);
        serpentard.advance;
        serpentard.draw();
        setTimeout(refreshCanvas,delais);
    }

    function drawBlock(contexte,position){
        var x = position[0] * blockSize; //dessiner un block
        var y = position[1] * blockSize; //dessiner un block
        contexte.fillRect(x,y, blockSize, blockSize); // Dessiner le rectangle
    }

    function snake(body){
        this.body = body;
        this.draw = function(){
            contexte.save(); //Sauvegarder le contexte du canvas avant d'entrer dans la fonction
            contexte.fillStyle("#ff0000");
            for(var i = 0; i < this.body.length; i++){
                drawBlock(contexte, this.body[i]);
            }
            contexte.restore();
        };
        this.advance = function(){ //Fonction pour faire avancer le serpent
            var nextPosition = this.body[0].slice(); //Nouvelle position de la tête du serpent
            nextPosition[0] += 1;
            this.body.unshift(nextPosition);
            this.body.pop(); //Supprimer le dernier element du array
        }
    }
}