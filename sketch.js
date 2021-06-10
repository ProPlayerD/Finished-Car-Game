var dataBase,game,player,form,playerCount,gameState = 0,players;
var car1,car2,car3,car4,cars
var car1Img, car2Img, car3Img,car4Img, trackImg

function preload(){

car1Img = loadImage("Images/car1.png");
car2Img = loadImage("Images/car2.png");
car3Img = loadImage("Images/car3.png");
car4Img = loadImage("Images/car4.png");
trackImg = loadImage("Images/track.jpg");

}

function setup(){
    createCanvas(displayWidth- 50,displayHeight-170);
    dataBase = firebase.database();
    game = new Game()
    game.getState();
    game.start()
   
}

function draw(){
   if(playerCount === 4){
      game.updateState(1);
 
   }
    if(gameState === 1){
      clear()
      game.play()
    }  
    
    if(gameState == 2){
      game.end();

    }
}


