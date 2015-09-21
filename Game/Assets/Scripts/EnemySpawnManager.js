#pragma strict

//var playerHealth : PlayerHealth;
var Enemy : GameObject;
var spawnTime : float = 4f;
var spawnPoints : Transform[];

private var enemyCount : int;

function Start () {
	InvokeRepeating("Spawn", spawnTime, spawnTime);
}

function Spawn () {	
	var spawnPointI : int = Random.Range(0, spawnPoints.Length);
	Instantiate(Enemy, spawnPoints[spawnPointI].position, spawnPoints[spawnPointI].rotation);
	enemyCount += 1;
	Debug.Log(enemyCount);
	if (enemyCount >= 10) {
		CancelInvoke();
		Destroy(Enemy.gameObject);
	}
}