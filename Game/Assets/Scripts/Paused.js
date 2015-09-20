#pragma strict

var PauseUI : GameObject;
private var paused = false;

function Start () {
	PauseUI.SetActive(false);
	Cursor.visible = false;
	Cursor.lockState = CursorLockMode.Locked;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Return)){
		paused = !paused;
		}
	if (paused) {
		PauseUI.SetActive(true);
		Time.timeScale = 0;
		Cursor.visible = true;
		Cursor.lockState = CursorLockMode.Confined;
		} else if (!paused) {
			PauseUI.SetActive(false);
			Time.timeScale = 1;
			Cursor.lockState = CursorLockMode.Locked;
	}
}