// Form: 
// Form should contain theinput box 
// and a button to log in.

// ● When the button is pressed, the player's
// name should be registered in the database 
// and a newplayer should be created

class Form {

    constructor() {
      
    }

    display(){
      var title = createElement('h2')
     title.html('CAR RACING')
title.position(200,50)
      
      var input = createInput('name')
    input.position(300,200)
      var button = createButton('GO')
      button.position(350,300)
      
  
      button.mousePressed(function(){ 
        
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);

        
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });
  
    }
  }
