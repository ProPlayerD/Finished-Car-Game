class Player{
    constructor(){
     this.index = null;
     this.name = null;
     this.distance = 0;
     this.rank = null;
    }

    //read the playerCount value from the database
    getCount(){
        dataBase.ref("playerCount").on("value",function(data){
            playerCount= data.val()
        })
    }

    //write the playerCount value to the database
    updateCount(count){
        dataBase.ref("/").update({
            playerCount:count
        })
    }

    //write player name and distance to the database
    updateInfo(){
        dataBase.ref("players/player"+this.index).set({
            name:this.name,
            distance:this.distance
             
        })
    }

    //reads the complete information of all players
    static getPlayersInfo(){
      dataBase.ref("players").on("value",(data)=>{
          players = data.val()
      })
    }

    getCarsAtEnd(){
        dataBase.ref("CarsAtEnd").on("value",(data)=>{
            this.rank= data.val()
        })
    }

    static updateCarsAtEnd(count){
        dataBase.ref("/").update({
            CarsAtEnd:count
        })
    }
}