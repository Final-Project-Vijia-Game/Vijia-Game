#pragma strict

var health = 100;
var currentHealth : int;
//This is healthbar slider OBJECT
var healthBar : GameObject;
//This is healthbar slider component
var healthBarValue : UI.Slider;
healthBar = GameObject.FindGameObjectWithTag("HB");
healthBarValue = healthBar.GetComponent(UI.Slider);

function Start(){
Debug.Log(healthBarValue.value);
}
function Damage (DamagePlayer : int){
	currentHealth = healthBarValue.value -= DamagePlayer;
	health = currentHealth;
	if (health <= 0){
			Debug.Log("You ded");
		}
	}
	
		function OnTriggerEnter (other : Collider) {
		Debug.Log("Player says: Oh no!");
	}
	
function Update () {
		if (Input.GetKey ("escape")) {
			Application.Quit();
		}
	}
//	
//
//function OnTriggerEnter (collision : Collider){
//	Debug.Log("Ow");
//	if (collision.gameObject == Enemy){
//		Debug.Log("Boop");
//		Damage(50);
//		}
//}

