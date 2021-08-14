//Player: A new player object should be created 
// every time a new user logs in. 
// It should contain all the information
// about the player - name, position in the game 




class Player {
    constructor(){}
  
    getCount(){
      //to access playerCount from database
       
        var playerCountRef  = database.ref('playerCount');
        playerCountRef.on("value",function(data){ 
           playerCount = data.val();
        })
      }
    
    
  
    updateCount(count){
     //to update database with the new count
    
    database.ref('/').update({
      playerCount: count
    });
    }

    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }