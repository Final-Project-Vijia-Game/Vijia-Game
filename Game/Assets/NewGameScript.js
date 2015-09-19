#pragma strict

function NewGameSession (scene : int) {

	Application.LoadLevel(scene);
	
}

function Exit (){
	Application.Quit();
}