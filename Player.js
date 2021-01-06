class Player
{
    constructor()
    {
this.name=null
this.distance=0
this.position=null
    }
    readplayercount()
    {
        var playerposition=database.ref("playercount")
        playerposition.on("value",function(data){
            playercount=data.val()})
    }
    writeplayercount(a){
database.ref("/").update({
    "playercount":a
})
    }
    createplayerfield(){
var field="allplayers/player"+this.position
database.ref(field).set({
    "name":this.name,
    "distance":this.distance
})
    }
    static readallplayers(){
        var playerall=database.ref("allplayers")
        playerall.on("value",function(data){
            allplayer=data.val()
        })
    }
}