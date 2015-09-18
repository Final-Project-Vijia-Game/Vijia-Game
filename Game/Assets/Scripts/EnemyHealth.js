//#pragma strict

var Health = 100;

function Damage (DamageThing : int){
	Health -= DamageThing;
	if (Health <= 0) {
		Dead();
		}
	}

function Dead (){
	Destroy(gameObject);
	Debug.Log("Ded");
	}
	
//	function OnCollisionEnter (collision : Collision){
//if (collision.gameObject.FindWithTag ("Player")){
//	Debug.Log("Boop");
//
//	}
//}

var Distance;
var Target : Transform;
var attackRange = 50.0;

function Update() {
	var player = GameObject.FindGameObjectWithTag("Player");
	Distance = Vector3.Distance(player.transform.position,this.gameObject.transform.position);
	
	if (Distance <= attackRange) {
		Debug.Log(this.gameObject.transform.position + " " + player.transform.position);
		Debug.Log(Distance);
		GetComponent.<Renderer>().material.color = Color.red;
		attack();
	}
}

function attack() {
	Debug.Log("attacked");
}