#pragma strict
//functions to use for menu buttons

//Despite naming convention this will also be used to change the scene to credit page.
function NewGameSession (scene : int) {
	//the scenes of the project exist in an array of sorts. scene will be an integer that will correspond to a scene
	//and change to that scene
	Application.LoadLevel(scene);
}

function Exit (){
	//this button will quite the game
	Application.Quit();
}