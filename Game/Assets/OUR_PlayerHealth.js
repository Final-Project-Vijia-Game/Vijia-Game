#pragma strict
//Variables for health updates
var health = 100;
var currentHealth : int;
//This is healthbar slider OBJECT
var healthBar : GameObject;
//This is healthbar slider component
var healthBarValue : UI.Slider;
healthBar = GameObject.FindGameObjectWithTag("HB");
healthBarValue = healthBar.GetComponent(UI.Slider);

//Variables to indicate damage
var damageIndicator : UnityEngine.UI.Image;
var flashSpeed : float = 2.5;
var flashColor : Color = new Color(1f, 0f, 0f, 0.1f);

function Damage (DamagePlayer : int){
	currentHealth = healthBarValue.value -= DamagePlayer;
	health = currentHealth;
	damageIndicator.color = flashColor;
	
	if (health <= 0){
			Debug.Log("You ded");
		} else {
			yield WaitForSeconds(.5);
			damageIndicator.color = Color.Lerp (damageIndicator.color, Color.clear, flashSpeed * Time.deltaTime);
		}
	}
	
function Update () {
		if (Input.GetKey ("escape")) {
			Application.Quit();
		}
}
