
 function Awake () {
 	DontDestroyOnLoad(this.gameObject);
	var song: GameObject[] = GameObject.FindGameObjectsWithTag("Song");
	if (song.Length > 1){
		Destroy(this.gameObject);
	}        
 }