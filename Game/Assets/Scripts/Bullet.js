#pragma strict

var Flare : Transform;
var DamageThing = 50;

function Update () {
	var shot : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay (Vector3(Screen.width * 0.5, Screen.height *  0.5, 0));
	if (Input.GetMouseButtonDown(0)){
		if(Physics.Raycast(ray,shot,50)){
			var particleClone = Instantiate(Flare, shot.point, Quaternion.LookRotation(shot.normal));
			Destroy(particleClone.gameObject,2);
			shot.transform.SendMessage("Damage",DamageThing,SendMessageOptions.DontRequireReceiver);
		}
	}
}