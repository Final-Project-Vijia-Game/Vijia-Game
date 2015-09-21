//Target will be a position. To be set in the GUI as the player
var Target : Transform;
//Enemy has 3 phases, defaults to idle until player is in range of this, then goes to look at player
var noticedRange = 50.0;
//3rd phase is enemy pursuing player
var chaseRange = 35.0;
//range in which the player is in to trigger an attack
var attackRange = 6.0;
//enemies' movespeed
var moveSpeed = 20.1;
//gives a smooth effect rather than snapping. To be used with a rotation
var Damping = 6.0;
//prevents enemies from attack a bunch of times in a single frame
var attackRepeatTime = 1;

//controller is the script that will give the enemy movement and rigidbody/physics
var controller : CharacterController;
//keeps enemy grounded for the most part
var gravity : float = 10.0;

private var MoveDirection : Vector3 = Vector3.zero;

//Enemy is able to hit player for 10 HP at a time
var DamagePlayer = 10;

//declaring that attackTime will be a floating number
private var attackTime : float;

//player is set to a GameObject
var player : GameObject;
//player is set to something called "OUR_PlayerHealth
var playerHealth : OUR_PlayerHealth;
//player is declared as a gameobject with the tag "Player"
player = GameObject.FindGameObjectWithTag("Player");
//playerHealth is the component(slider bar) of the player gameObject
playerHealth = player.GetComponent(OUR_PlayerHealth);

function Start () {
	//at the start of the game attackTime is set the the starting frame time
    attackTime = Time.time;
}

//continuous update/check by frame
function Update () {
	//Distance is equal to the XYZ distance from 2 points. 'Target' is the player's XYZ and 'transform' is the enemy's XYZ
    Distance = Vector3.Distance(Target.position, transform.position);
    
    if (Distance < noticedRange) {
   		//if that distance is within the range of 'noticedRange' run the lookAt function (line 65)
        lookAt();
    }
    
    if (Distance > noticedRange) {
    	//while outside of that range, the enemy will idle and its color is blue
        GetComponent.<Renderer>().material.color = Color.blue;
    }
    
    if (Distance < attackRange) {
    	//if within attack range, run the attack function (line 83)
        attack();
    }
    
    else if (Distance < chaseRange) {
    	//if within chase range, run the chase function (line 74)
        chase();
    }
}

function lookAt() {
	//when looking at the player, the enemy is yellow
    GetComponent.<Renderer>().material.color = Color.yellow;
    //its rotation will be based on the Target's(the player) position and its own
    var rotation = Quaternion.LookRotation(Target.position - transform.position);
    //the enemie rotates to face the player, damping reduces the time to make that turn
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function chase() {
	//when chasing the enemy turns red
    GetComponent.<Renderer>().material.color = Color.red;
    //enemy will only move in a straight line
    moveDirection = transform.forward;
    //the enemy's will move at a constant speed per frame
    moveDirection *= moveSpeed;
    //enemy's direction can chase in a vertical direction
    moveDirection.y -= gravity * Time.deltaTime;
    controller.Move(moveDirection * Time.deltaTime); 
}

function attack() {
    if (Time.time > attackTime) {
    //while attack if sufficient time as passed...
        Debug.Log("Attacked!");
        //register another hit
        Target.SendMessage("Damage", DamagePlayer);
        //attack time will increment to maintain pace of attacks
        attackTime = Time.time + attackRepeatTime;
    }
}

//function that will be called via a raycast message
function InflictDamage() {
	//when invoked the enemy will appear to be more aggressive by...
	//having a larger chase radius
    chaseRange += 35;
    //move faster
    moveSpeed += 10;
    //and having increased notice range
    noticedRange += 50;
}