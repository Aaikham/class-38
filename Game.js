class Game{
    constructor(){


    }
    readgamestate(){
    
        var gameposition=database.ref("gamestate")
        gameposition.on("value",function(data){
            gamestate=data.val()})
    }
    writegamestate(){
        database.ref("/").update({
            "gamestate":1
    })
}
    start(){
        if(gamestate==0){
            form=new Form()
            player=new Player()
            player.readplayercount()
            form.display()
        }    }
        playgame(){
            form.hide()
        Player.readallplayers()
        console.log(allplayer)
        var y=200  
        for(var p in allplayer)
        {
            text(allplayer[p].name+" : "+allplayer[p].distance,200,y)
            y=y+50
        }
        if(keyIsDown(UP_ARROW))
        {
           player.distance=player.distance+30 
           player.createplayerfield()
        }
        }
}