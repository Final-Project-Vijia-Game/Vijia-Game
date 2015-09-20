#pragma strict

//var playerHealth : PlayerHealth;
var Enemy : GameObject;
var spawnTime : float = 5f;
var spawnPoints : Transform[];

var enemyCount : int;

function Start () {
	InvokeRepeating("Spawn", spawnTime, spawnTime);
}

function Spawn () {	
	var spawnPointI : int = Random.Range(0, spawnPoints.Length);
	Instantiate(Enemy, spawnPoints[spawnPointI].position, spawnPoints[spawnPointI].rotation);
	enemyCount += 1;
	Debug.Log(enemyCount);
	if (enemyCount >= 4) {
		CancelInvoke();
	}
}