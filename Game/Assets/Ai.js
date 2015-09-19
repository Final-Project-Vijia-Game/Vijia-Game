var Target : Transform;
var noticedRange = 40.0;
var chaseRange = 25.0;
var attackRange = 5.0;
var moveSpeed = 5.0;
var Damping = 6.0;
var attackRepeatTime = 1;

var controller : CharacterController;
var gravity : float = 10.0;
private var MoveDirection : Vector3 = Vector3.zero;

var Damage = 10;

private var attackTime : float;

function Start () {
    attackTime = Time.time;
}

function Update () {
    Distance = Vector3.Distance(Target.position, transform.position);
    
    if (Distance < noticedRange) {
        lookAt();
    }
    
    if (Distance > noticedRange) {
        GetComponent.<Renderer>().material.color = Color.blue;
    }
    
    if (Distance < attackRange) {
        attack();
    }
    
    else if (Distance < chaseRange) {
        chase();
    }
}

function lookAt() {
    GetComponent.<Renderer>().material.color = Color.yellow;
    var rotation = Quaternion.LookRotation(Target.position - transform.position);
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function chase() {
    GetComponent.<Renderer>().material.color = Color.red;
    
    moveDirection = transform.forward;
    moveDirection *= moveSpeed;
    
    moveDirection.y -= gravity * Time.deltaTime;
    controller.Move(moveDirection * Time.deltaTime); 
}

function attack() {
    if (Time.time > attackTime) {
        Debug.Log("Attacked!");
        attackTime = Time.time + attackRepeatTime;
    }
}

function InflictDamage() {
    chaseRange += 35;
    moveSpeed += 10;
    noticedRange += 50;
}