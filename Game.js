// Game object should be able to hold the state
// of the game. 
// It should be able to display form when the game
// state is 0(WAIT) or the game when the game state 
// is 1(PLAY)




class Game {
  constructor(){}
  
  getState(){ 
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){ 
       gameState = data.val();
    })
   
  }

  update(state){ 
    database.ref('/').update({
      gameState: state
    });
  }

  start(){  
    if(gameState === 0){
player=new Player()
player.getCount()    
form=new Form()
 form.display()     
    } 
  }
}
