#pragma strict


//targets the controller script for disabling in line 66
var fpc : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;
//setup for kill counter and end game
var counter : GameObject;

//Win Screen
var win : GameObject;
win.SetActive(false);

//Variables for health updates
var health = 100;
var currentHealth : int;
//healthBar will be an object
var healthBar : GameObject;
//healthBarValue will be a UI slider
var healthBarValue : UI.Slider;
//Sets healthBar to the Object with the HB tag
healthBar = GameObject.FindGameObjectWithTag("HB");
//Sets the value to the slider that exist in the 'HB' object
healthBarValue = healthBar.GetComponent(UI.Slider);

//Variables to indicate damage
//Targets or references a UI image (the red screen that flashes)
var damageIndicator : UnityEngine.UI.Image;
//A time increment used in a LERP function later
var flashSpeed : float = 2.5;
//Sets collor to red with some opacity
var flashColor : Color = new Color(1f, 0f, 0f, 0.1f);

//GameOver stuff. It's obviously disabled at the start of the game
var gameOver : GameObject;
gameOver.SetActive(false);

//Function that takes an integer
function Damage (DamagePlayer : int){
	//set the current health equal to the bar's value minus the damage being passed in
	currentHealth = healthBarValue.value -= DamagePlayer;
	//sets the health for the backend
	health = currentHealth;
	//changes the color to opaque red
	damageIndicator.color = flashColor;
	
	if (health <= 0){
		Debug.Log("You ded");
		//if player is dead, the game over canvas appears
		gameOver.SetActive(true);
		fpc.enabled=false; 
		//And after 2 seconds the player is redirected to the main menu w/ mouse view and capabilities
        yield WaitForSeconds(3);
        Application.LoadLevel(0);
        Cursor.visible = true;
        Cursor.lockState = CursorLockMode.Confined;
	} else {
		//Otherwise, if player isn't dead, the screen goes back to normal
		yield WaitForSeconds(.5);
		damageIndicator.color = Color.Lerp (damageIndicator.color, Color.clear, flashSpeed);
	}
}
	
function Update () {
	//Allows player to quite the game at any time by pressing escape. Only available in the app version.
	if (Input.GetKey ("escape")) {
		Application.Quit();
	}
	checkForWin();
}

function checkForWin() {
	var enemies: GameObject[] = GameObject.FindGameObjectsWithTag("Enemy");
	var howManyLeft = enemies.length; // get the array length
	counter.GetComponent.<UnityEngine.UI.Text>().text = "ENEMIES LEFT: " + howManyLeft;
	if (howManyLeft == 0){
		Debug.Log("There are "+howManyLeft+" enemies left");
		win.SetActive(true);
		fpc.enabled=false;
		//wait 4 seconds
		yield WaitForSeconds(3);
		//go back to main menu
		Application.LoadLevel(0);
		//restore normal mouse functions
		Cursor.visible = true;
        Cursor.lockState = CursorLockMode.Confined;
	}
}

