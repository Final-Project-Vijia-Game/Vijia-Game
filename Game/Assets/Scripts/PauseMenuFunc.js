#pragma strict

function Restart(scene : int){
	//button is intended to reload the same scene, simulating a restart
	Application.LoadLevel(scene);
}

function MainMenu(scene : int){
	//send the player back to the first scene/main menu
	Application.LoadLevel(scene);
}