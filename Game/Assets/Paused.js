#pragma strict

var PauseUI : GameObject;
Cursor.visible = false;
private var paused = false;

function Start () {
	PauseUI.SetActive(false);
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Return)){
		paused = !paused;
		}
	if (paused) {
		PauseUI.SetActive(true);
		Time.timeScale = 0;
		 Cursor.visible = true;
		} else if (!paused) {
			PauseUI.SetActive(false);
			Time.timeScale = 1;
	}
}