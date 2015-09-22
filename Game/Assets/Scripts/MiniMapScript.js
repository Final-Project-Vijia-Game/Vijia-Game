//Target will be the player object
var Target : GameObject;
function Update () {

	//Follows the player
	gameObject.transform.position.x = Target.transform.position.x;
	gameObject.transform.position.z = Target.transform.position.z;
}