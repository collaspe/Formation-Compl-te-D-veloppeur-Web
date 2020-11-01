/* JEU SNAKE 
- Revoir à partir de la vidéo 19 de la formation en JS car compliqué
- Reprendre video 21 je me suis arrêté là

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
        serpentard = new snake([[6,4],[5,4],[4,4]], "right");
        refreshCanvas();
    }

    function refreshCanvas(){
        contexte.clearRect(0,0,canvas.width,canvas.height);
        serpentard.advance();
        serpentard.draw();
        setTimeout(refreshCanvas,delais);
    }

    function drawBlock(contexte,position){
        var x = position[0] * blockSize; //dessiner un block
        var y = position[1] * blockSize; //dessiner un block
        contexte.fillRect(x,y, blockSize, blockSize); // Dessiner le rectangle
    }

    function snake(body, direction){
        this.body = body;
        this.direction = direction;
        this.draw = function(){
            contexte.save(); //Sauvegarder le contexte du canvas avant d'entrer dans la fonction
            contexte.fillStyle = "#ff0000"; //Couleur du serpent
            for(var i = 0; i < this.body.length; i++){
                drawBlock(contexte, this.body[i]);
            }
            contexte.restore();
        };
        this.advance = function(){ //Fonction pour faire avancer le serpent
            var nextPosition = this.body[0].slice(); //Nouvelle position de la tête du serpent
            //nextPosition[0] += 1; //x
            switch(this.direction){
                case "left":
                    nextPosition[0] -= 1; //x - 1
                    break;
                case "right":
                    nextPosition[0] += 1; //x + 1
                    break;
                case "down":
                    nextPosition[1] += 1; //y + 1
                    break;
                case "up":
                    nextPosition[1] -= 1; //y - 1
                    break;
                default:
                    throw("Direction invalide");
            }
            this.body.unshift(nextPosition);
            this.body.pop(); //Supprimer le dernier element du array
        };
        this.setDirection = function (newDirection){ //Donner la direction au serpent
            var allowedDirections; //direction du serpent permises
            switch(this.direction){
                case "left":
                case "right":
                    allowedDirections = ["up", "down"];
                    break;
                case "down":
                case "up":
                    allowedDirections = ["left", "right"];
                    break;
                default:
                    throw("Direction invalide");
            }
            if(allowedDirections.indexOf(newDirection) > -1){ //indexOf est une fiction pour savoir l'emplacement de la direction "up" ou "down" donc 0 ou 1 (allowedDirections = ["up", "down"];)
                this.direction = newDirection;
            }
        };
    }

    document.onkeydown = function handleKeydown(e){ //Recuperation de la touche appuyée par l'utilisateur (e est l'evenement)
        var key = e.keyCode;
        var newDirection;
        switch(key){
            case 37: //Fleche gauche
                newDirection = "left";
                break;
            case 38: //Fleche haut
                newDirection = "up";
                break;
            case 39: //Fleche droite
                newDirection = "right";
                break;
            case 40: //Fleche bas
                newDirection = "down";
                break;
            default:
                return;
        }
        serpentard.setDirection(newDirection);
    }
}