<!DOCTYPE html>
<html lang="en-US">
<head>
	<Title>Legend of Zelda HTML</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="./zeldaNES.css">
	
	<!--<script>
	function buttonBow(){
		if(typeof(Storage) !== "undefined"){
			if(sessionStorage.clickcount){
				sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
			}
			else{
			sessionStorage.clickcount = 1;
			}
			document.getElementById("result").innerHTML = "You have clicked " + sessionStorage.clickcount + " time(s)";
		}
		else{
			document.getElementByID("result").innerHTML = "oops";
		}
	</script>-->
</head>
<body>
<ul class="nav">
	<li><a href="LegendofZelda-ItemTracker.html">Home</a></li>
	<li><a href="LegendofZelda.asp">The Legend of Zelda</a></li>
	<li><a href="lozii.asp">Adventure of Link</a></li>
	<li><a href="alinktothepast.asp">A Link to the Past</a></li>
	<li><a href="linksawakening.asp">Link's Awakening</a></li>
	<li><a href="oot.asp">Ocarina of Time</a></li>
	<li><a href="majorasmask.asp">Majora's Mask</a></li>
	<li><a href="oracleofseasons-ages.asp">Oracle of Seasons - Oracle of Ages</a></li>
	<li><a href="alttp.windwaker">The Wind Waker</a></li>
	<li><a href="4swords.asp">Four Swords Adventures</a></li>
	<li><a href="minishcap.asp">The Minish Cap</a></li>
	<li><a href="twilightprincess.asp">Twilight Princess</a></li>
	<li><a href="phantomhourglass.asp">Phantom Hourglass</a></li>
	<li><a href="spirittracks.asp">Spirit Tracks</a></li>
	<li><a href="skywardsword.asp">Skyward Sword</a></li>
	<li><a href="alinkbetweenworlds.asp">A Link Between Worlds</a></li>
	<li><a href="breathofthewild.asp">Breath of the Wild</a></li>
</ul>
<h1>Legend of Zelda - NES</h1>
<p> The first game in the Legend of Zelda Series. 
<h2>Item Collection List</h2>
<!--<button id="bowpng"  onclick="buttonBow()" type="button">Bow</button>-->
<p><div id="result"> </div></p>

<Button type="button" onclick="buttonBow()">Bow</Button>
<br>
<div class="img">
	<a target="_blank" href="./image/bow.png">
		<img id="bowPng" src="./images/bow.png" style="visibility:hidden"/>
	</a>
</div>
<Button type="button" onclick="buttonBomb()">Bombs</Button>
<br>
<div class="img">
	<a target="_blank" href=".images/bomb.png">
		<img id="bombPng" src="./images/bomb.png" style="visibility:hidden"/>
	</a>
</div>
<script>
	function buttonBow(){
		if(document.getElementById('bowPng').style.visibility == 'hidden'){
			document.getElementById('bowPng').style.visibility = 'visible';
		}else{
			document.getElementById('bowPng').style.visibility = 'hidden'
		}
	}
	function buttonBomb(){
		if(document.getElementById('bombPng').style.visibility == 'hidden'){
			document.getElementById('bombPng').style.visibility = 'visible';
		}else{
			document.getElementById('bombPng').style.visibility = 'hidden'
		}
	}
</script>

</body>
</html>