//#pragma strict
//
//var lookObject : UnityStandardAssets.Characters.FirstPersonCharacter.MouseLook;
//var lookCamera : UnityStandardAssets.Characters.FirstPersonCharacter.MouseLook;
//
//function Start () {
//	lookObject = gameObject.GetComponent(UnityStandardAssets.Characters.FirstPersonCharacter.MouseLook);
//	lookCamera = GameObject.FindGameObjectWithTag("MainCamera").GetComponent(UnityStandardAssets.Characters.FirstPersonCharacter.MouseLook);
//
//}
//
//function Update () {
//
//}
//
//function OnGUI (){
//	if (GUI.Button(Rect(Screen.width * .5-50, 200-20, 100, 40),"Respawn")){
//		RespawnPlayer();
//	}
//}
//
//function RespawnPlayer(){
//	Debug.Log("Respawn");
//}