//sets health value
var Health = 100;

function Damage (DamageEnemy : int){
	Health -= DamageEnemy;
	if (Health <= 0) {
		Dead();
		}
	}

function Dead (){
	Destroy(gameObject);
	Debug.Log("You've been dedded");
	}
