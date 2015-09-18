#pragma strict

var Health = 100;
//var Enemy = GameObject.FindGameObjectWithTag("Enemy");

function Damage (DamageThing : int){
	Health -= DamageThing;
	if (Health <= 0){
			Debug.Log("You ded");
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

