var database;
var gamestate,playercount;
gamestate=0;
playercount=0;
var game,player,form,allplayer;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game=new Game()
    game.start()
}

function draw(){
    background("white");
    game.readgamestate()
    if(playercount===2){
    game.writegamestate()
    }
    if(gamestate===1){
        game.playgame()
    }
}


