var canvas, database;
var gameState =0;
var playerCount;
var form, player, game;

function setup(){
  database = firebase.database();
 
  canvas = createCanvas(400,400);

  //to create a new Game object, 
  //get the gameState and then
//start the game.

 game = new Game();
 game.getState();
 game.start();
}

function draw(){
 
    }
  

//In our multiplayer game, we need to ask users to log in with their names.

//Those names need to be registered in the database and new players 
//with these names need to be created.

//We need to create some sort of a form where different users can log in
// their name and get into the game.

// Everytime a new user logs in, a new Player should be created.

//For example, when the game state is 0 (WAIT), we want the players 
//to see the login form where they register
//their name as players.

//When the number of registered players reaches 4, we want the game
//state to become 1 (PLAY). 
//When the game state changes to 1, we would like the game to start

// 3 objects

//Form: 
//Form should contain the input box and a button to log in.
// When the button is pressed, the player's name should be registered 
//in the database and a new player should be created.

// Player: 
//A new player object should be created every time a new user logs in. 
//It should contain all the information about the player - name,
//position in the game etc.
// For now it can just have the name property . 
//Itshould also be able to read and write player information to the
//database - for example player count or player name

//Game Object:
// Game object should be able to hold the state of the game. 
//It should be able to display form when the gamestate is 0(WAIT) 
//or the game when the game state is 1(PLAY) or leaderboard when
//the game state is 2(END).
//For now, we will only consider the case when the game state is 0.