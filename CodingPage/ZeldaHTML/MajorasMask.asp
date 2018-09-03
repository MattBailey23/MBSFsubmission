<!DOCTYPE html>
<html lang="en-US">
<head>
	<Title>Legend of Zelda HTML</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="./MajorasMaskSS.css">
	<script type='text/javascript'
		src='http://code.jquery.com/jquery-1.9.1.js'></script>
	
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
<h1>Legend of Zelda Majora's Mask - N64/3DS</h1>
 
<h2>Transformation Masks</h2>
<!--<button id="bowpng"  onclick="buttonBow()" type="button">Bow</button>-->
<p><div id="result"> </div></p>

<!--<Button type="button" onclick="dekuMaskButton()">Deku Mask</Button>
<br>
<div class="img">
	<a target="_blank" href="./images/MajorasMask/Masks/Greyed/DekuMaskG.png">
		<img id="dekuPng" src="./images/MajorasMask/Masks/Greyed/DekuMaskG.png" style="visibility:visible"/>
	</a>
</div>-->
<!--<div class="img">
	<a target="_blank" href="./images/MajorasMask/Masks/DekuMask.png">
		<img id="dekuPng" src="./images/MajorasMask/Masks/DekuMask.png" style="visibility:visible"/>
	</a>
</div>-->
<!--<Button type="button" onclick="goronMaskButton()">Goron Mask</Button>-->

<!--<div class="img">
	<a target="_blank" href="./images/MajorasMask/Masks/GoronMask.png">
		<img id="goronPng" src="./images/MajorasMask/Masks/GoronMask.png" style="visibility:hidden"/>
	</a>
</div>-->


<!--<Button type="button" onClick="zoraMaskButton()">Zora Mask</Button>
<br>
<div class="img">
	<a target="_blank" href="./images/MajorasMask/Masks/ZoraMask.png">
		<img id="zoraPng" src="./images/MajorasMask/Masks/ZoraMask.png" style="visibility:hidden"/>
	</a>
</div>-->
<div>
	<input type="image" id="dekuButton" src="./images/MajorasMask/Masks/DekuMask.png" onclick="dekuMaskButton()" 
		style="opacity:0.3" />
		
	<div class="divider"/>
	
	<input type="image" id="goronButton" onclick="goronMaskButton()" 
		style="height:100px;width:93px;" src="./images/MajorasMask/Masks/GoronMask.png"/>
	
	<div class="divider"/>
	
	<input type="image" id="zoraButton" onclick="zoraMaskButton()" 
		style="height:100px;width:150px;" src="./images/MajorasMask/Masks/ZoraMask.png"/>
	
	<div class="divider"/>
	
	<input type="image" id="deityButton" onclick="deityMaskButton()" 
		style="height:100px;width:93px;" src="./images/MajorasMask/Masks/FierceDeitysMask.png"/>
</div>
<!--<Button type="button" onClick="deityMaskButton()">Fierce Deity's Mask</Button>
<br>
<div class="img">
	<a target="_blank" href="./images/MajorasMask/Masks/FierceDeitysMask.png">
		<img id="deityPng" src="./images/MajorasMask/Masks/FierceDeitysMask.png" style="visibility:hidden"/>
	</a>
</div>-->


<script>
int dekuCount = 0;
	function dekuMaskButton(){
		x = document.getElementById('dekuButton');
		x.style.opacity = 1;
		
	}  
		//Grey out image until click
		/*if (dekuPng.getAttribute("src") == "./images/MajorasMask/Masks/Greyed/DekuMaskG.png") {
			dekuPng.setAttribute("src", "./images/MajorasMask/Masks/DekuMask.png");
		} else {
			dekuPng.setAttribute("src", "./images/MajorasMask/Masks/Greyed/DekuMaskG.png");
		}*/
		
		/*if (dekuButton.getAttribute("src") == "./images/MajorasMask/Masks/Greyed/DekuMaskG.png") {
			dekuButton.setAttribute("src", "./images/MajorasMask/Masks/DekuMask.png");
		} else {
			dekuButton.setAttribute("src", "./images/MajorasMask/Masks/Greyed/DekuMaskG.png");
		}*/
		
	
		//Hide image until click
		/*if(document.getElementById('dekuPng').style.visibility == 'hidden'){
			document.getElementById('dekuPng').style.visibility = 'visible';
		}else{
			document.getElementById('dekuPng').style.visibility = 'hidden'
		}*/
	
	function goronMaskButton(){
		/*if(document.getElementById('goronPng').style.visibility == 'hidden'){
			document.getElementById('goronPng').style.visibility = 'visible';
		}else{
			document.getElementById('goronPng').style.visibility = 'hidden'
		}*/
		if (goronButton.getAttribute("src") == "./images/MajorasMask/Masks/Greyed/GoronMaskG.png") {
			goronButton.setAttribute("src", "./images/MajorasMask/Masks/GoronMask.png");
		} else {
			goronButton.setAttribute("src", "./images/MajorasMask/Masks/Greyed/GoronMaskG.png");
		}
	}
	function zoraMaskButton(){
		/*if(document.getElementById('zoraPng').style.visibility == 'hidden'){
			document.getElementById('zoraPng').style.visibility = 'visible';
		}else{
			document.getElementById('zoraPng').style.visibility = 'hidden'
		}*/
		if (zoraButton.getAttribute("src") == "./images/MajorasMask/Masks/Greyed/ZoraMaskG.png") {
			zoraButton.setAttribute("src", "./images/MajorasMask/Masks/ZoraMask.png");
		} else {
			zoraButton.setAttribute("src", "./images/MajorasMask/Masks/Greyed/ZoraMaskG.png");
		}
	}
	function deityMaskButton(){
		/*if(document.getElementById('deityPng').style.visibility == 'hidden'){
			document.getElementById('deityPng').style.visibility = 'visible';
		}else{
			document.getElementById('deityPng').style.visibility = 'hidden'
		}*/
		if (deityButton.getAttribute("src") == "./images/MajorasMask/Masks/Transparent/FierceDeitysT.png") {
			deityButton.setAttribute("src", "./images/MajorasMask/Masks/FierceDeitysMask.png");
		} else {
			deityButton.setAttribute("src", "./images/MajorasMask/Masks/Transparent/FierceDeitysT.png");
		}
	}
</script>

</body>
</html>