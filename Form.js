class Form{
    constructor(){
        this. heading=createElement("h1")
        this.inputbox=createInput("enter your name")
        this. button=createButton("register")
        this. greeting=createElement("h2")
    }
    hide(){
        this.inputbox.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
     
     this.heading.html("welcome to my car racing game")
    this. heading.position(200,200)
     
     
    this. inputbox.position(100,300)

     
     this.button.position(70,320)
     this.button.mousePressed(()=>{
         player.name=this.inputbox.value()
         this.inputbox.hide()
         this.button.hide()
         
         this.greeting.html("welcome "+player.name)
         this.greeting.position(100,350)
         playercount=playercount+1
         player.position=playercount

         player.writeplayercount(playercount)
         player.createplayerfield()
     })
    }
}