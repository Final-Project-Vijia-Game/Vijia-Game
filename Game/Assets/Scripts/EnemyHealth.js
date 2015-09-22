//sets health value
var Health = 100;
var deathclip : AudioClip;
var death : AudioSource;

function Update(){
	if (Health <= 0) {
	death.PlayOneShot(deathclip);
	Dead();
	}
}
			
function Damage (DamageEnemy : int){
	Health -= DamageEnemy;
	}

function Dead (){
	Destroy(gameObject);
	Debug.Log("You've been dedded");
	}