class Game{
    constructor(){

    }

    //read the gameState value from the database
    getState(){
        dataBase.ref("gameState").on("value",function(data){
            gameState= data.val()
        })
    }

    //write the gameState value to the database
    updateState(state){
        dataBase.ref("/").update({
            gameState:state
        })
    }
    async start(){
      if(gameState === 0){
        player = new Player()
        var playerCountRef = await dataBase.ref("playerCount").once("value")
        if(playerCountRef.exists()){
        playerCount = playerCountRef.val()
        player.getCount()
      }
        

        form = new Form()
        form.display()
        
      }
      car1 = createSprite(100,200);
      car2 = createSprite(300,200);
      car3 = createSprite(500,200);
      car4 = createSprite(700,200);
      cars = [car1,car2,car3,car4];
      
      car1.addImage(car1Img);
      car2.addImage(car2Img);
      car3.addImage(car3Img);
      car4.addImage(car4Img);

    }
    //!== not equal to
    play(){
      form.hidden()
      Player.getPlayersInfo()
      if(players !== undefined){
        background(0);
        image(trackImg,0,-height*4,width,height*5);

        var index = 0
        var x = 170
        var y

        for(var i in players){
           index = index+1;
           x = x+200
           y = height - players[i].distance-70
           cars[index-1].x = x;
           cars[index-1].y = y;
           if(index === player.index){
           camera.position.x = width/2;
           camera.position.y = cars[index-1].y
           } 
        }
      }
      
      player.getCarsAtEnd();
      
      if(player.distance>2850){
        gameState = 2
        player.rank++
        Player.updateCarsAtEnd(player.rank);
      }

      if(keyDown(UP_ARROW)&&player.index !== null){
        player.distance = player.distance +10
        player.updateInfo()
      }
      drawSprites();
    }

    end(){
      console.log("GAME OVER!");
      console.log(player.rank);
    }
}