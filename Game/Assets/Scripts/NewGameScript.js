#pragma strict
//functions to use for menu buttons

function NewGameSession (scene : int) {
	//the scenes of the project exist in an array of sorts. scene will be an integer that will correspond to a scene
	//and change to that scene
	Application.LoadLevel(scene);
}

function Exit (){
	//this button will quite the game
	Application.Quit();
}