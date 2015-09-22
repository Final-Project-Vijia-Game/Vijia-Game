#pragma strict
//declares that this is a transform property/script
//the Flare is then set to a particle system on the GUI
var Flare : Transform;
//set damage of attacks
var DamageThing : int = 34;
var pewsource : AudioSource;
var pewpew : AudioClip;
var pewpew1 : AudioClip;
var pewpew2 : AudioClip;
var clips = new Array();
clips.push(pewpew);
clips.push(pewpew1);
clips.push(pewpew2);
//var cycle = 0;
//continuous update/check
function Update () {
	//shot is a RayCast (laser trajectory) 
	var shot : RaycastHit;
	//ray is the actual laser. It is set to where ever the camera is point starting a the very center of the screen
	var ray : Ray = Camera.main.ScreenPointToRay (Vector3(Screen.width * 0.5, Screen.height *  0.5, 0));
	
	if (Input.GetMouseButtonDown(0)){
		pewsource.PlayOneShot(clips[Mathf.Floor(Random.value*2)]);
		
//		source[cycle].PlayOneShot(clips[cycle]);
		
//		source[nowSound].PlayOneShot(clips[nowSound]);
		
		//when the user click the LMB
		if(Physics.Raycast(ray,shot,60)){
			//an clone of Flare is created at the point at which the laser reaches in a straight line
			var particleClone = Instantiate(Flare, shot.point, Quaternion.LookRotation(shot.normal));
			//removes the flare clone after 2 seconds
			Destroy(particleClone.gameObject,2);
			//the shot sends a message that envoke the 'Damage' function within the receipient
			//DamageThing is the integer that is being passed as an argument for the Damage function
			//However, we did not require the laser to have a receipient in order to convey a message
			shot.transform.SendMessage("Damage",DamageThing,SendMessageOptions.DontRequireReceiver);
			//the shot will also envoke the InflictDamage function in the enemy that will make it 'aggressive'
			shot.transform.SendMessage("InflictDamage",null,SendMessageOptions.DontRequireReceiver);
		}
	}
}