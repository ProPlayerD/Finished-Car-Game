class Form{
    constructor(){
      this.title = createElement("h1")
      this.input = createInput("name")
      this.button = createButton("START")
      this.greetings = createElement("h2");
      this.reset = createButton("RESET")
    }

  display(){
    
    this.title.html("Car game")
    this.title.position(width/2-50,40);
    this.reset.position(width-100,20);

    this.title.style("font-family","Century Gothic")
    
    this.input.position(width/2-60,150)

    
    this.button.position(width/2,200);
    this.button.style("background","blue")
    
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        this.title.hide()
        player.name = this.input.value()

        
        this.greetings.html("Hello! "+player.name)
        this.greetings.position(width/2-60,160) 
        
        playerCount++
        player.index = playerCount
        player.updateCount(playerCount);
        player.updateInfo()
    })

    this.reset.mousePressed(()=>{
        game.updateState(0);
        player.updateCount(0);
        Player.updateCarsAtEnd(0);
      
    })
  }  
  
  hidden(){
        this.input.hide()
        this.button.hide()
        this.title.hide()
        this.greetings.hide()
  }
}