#pragma strict

//PauseUI is a GameObject that will be set in the GUI as the canvas
var PauseUI : GameObject;
private var paused = false;

function Start () {
	//at the start of the scene the Pause canvas will be inactive/not shown
	PauseUI.SetActive(false);
	//the cursor will not be visible
	Cursor.visible = false;
	//the cursor will be locked at the center of the screen
	Cursor.lockState = CursorLockMode.Locked;
}

//continuos update/check
function Update () {
	if (Input.GetKeyDown(KeyCode.Return)){
		//if the enter/return button is press, which ever state the pause boolean is set to, it will now be opposite
		paused = !paused;
		}
	if (paused) {
		//if the pause state is true the pause canvas will appear
		PauseUI.SetActive(true);
		//game time/frames will freeze
		Time.timeScale = 0;
		//cursor is made available
		Cursor.visible = true;
		//cursor is only allowed within the confines of the app (should only work for the app version)
		Cursor.lockState = CursorLockMode.Confined;
		} else if (!paused) {
			//if the pause state is false the canvas goes back to hidden
			PauseUI.SetActive(false);
			//time frame rate returns to normal speed
			Time.timeScale = 1;
			//cursor goes back to being locked at the center of the screen
			Cursor.lockState = CursorLockMode.Locked;
	}
}