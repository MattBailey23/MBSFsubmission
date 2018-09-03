var getOpacity = function(el) {
	return el.style.opacity;
}

function changeOpacity(elem){
	
	var currentOpacity = parseFloat(getOpacity(elem));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		elem.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		elem.style.opacity = newOpacity; 
	}
}

/* Leaving this as a reminder of how much extra lines of Code you made yourself do when you could 
have achieved the same thing w/ 2 functions

//---------------------TRANSFORMATION MASKS-------------------------------------- 
	//Deku Mask Opacity
	
function dekuMaskButton() {
	var dekuButton = document.getElementById('dekuImage');
	var currentOpacity = parseFloat(getOpacity(dekuButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		dekuButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		dekuButton.style.opacity = newOpacity; 
	}
}
	
	//Goron Mask Opacity
	
function goronMaskButton() {
	var goronButton = document.getElementById('goronImage');
	var currentOpacity = parseFloat(getOpacity(goronButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		goronButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		goronButton.style.opacity = newOpacity; 
	}
	}
	
	//Zora Mask Opacity
	var zoraButton = document.getElementById('zoraImage');
	zoraButton.addEventListener('click', function zoraMaskButton() {
	var currentOpacity = parseFloat(getOpacity(zoraButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		zoraButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		zoraButton.style.opacity = newOpacity; 
	}
	});
	
	//Fierce Deity Mask Opacity
	var deityButton = document.getElementById('deityImage');
	deityButton.addEventListener('click', function deityMaskButton() {
	var currentOpacity = parseFloat(getOpacity(deityButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		deityButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		deityButton.style.opacity = newOpacity; 
	}
	});
//---------------------TRANSFORMATION MASKS-------------------------------------- 

//--------------------------NORMAL MASKS-------------------------------------- 
	//Postman's Hat
	var postmanButton = document.getElementById('postmanImage');
	postmanButton.addEventListener('click', function postmanMaskButton() {
	var currentOpacity = parseFloat(getOpacity(postmanButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		postmanButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		postmanButton.style.opacity = newOpacity; 
	}
	});
	
	//All Night Mask
	var allNightButton = document.getElementById('allNightImage');
	allNightButton.addEventListener('click', function allNightMaskButton() {
	var currentOpacity = parseFloat(getOpacity(allNightButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		allNightButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		allNightButton.style.opacity = newOpacity; 
	}
	});
	
	//Blast Mask
	var blastButton = document.getElementById('blastImage');
	blastButton.addEventListener('click', function blastMaskButton() {
	var currentOpacity = parseFloat(getOpacity(blastButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		blastButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		blastButton.style.opacity = newOpacity; 
	}
	});
	
	//Stone Mask
	var stoneButton = document.getElementById('stoneImage');
	stoneButton.addEventListener('click', function stoneMaskButton() {
	var currentOpacity = parseFloat(getOpacity(stoneButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		stoneButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		stoneButton.style.opacity = newOpacity; 
	}
	});
	
	//Great Fairy's Mask
	var greatFairyButton = document.getElementById('greatFairyImage');
	greatFairyButton.addEventListener('click', function greatFairyMaskButton() {
	var currentOpacity = parseFloat(getOpacity(greatFairyButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		greatFairyButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		greatFairyButton.style.opacity = newOpacity; 
	}
	});
	
	//Keaton's Mask
	var keatonButton = document.getElementById('keatonImage');
	keatonButton.addEventListener('click', function keatonMaskButton() {
	var currentOpacity = parseFloat(getOpacity(keatonButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		keatonButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		keatonButton.style.opacity = newOpacity; 
	}
	});
	
	//Bremen's Mask
	var bremenButton = document.getElementById('bremenImage');
	bremenButton.addEventListener('click', function bremenMaskButton() {
	var currentOpacity = parseFloat(getOpacity(bremenButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		bremenButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		bremenButton.style.opacity = newOpacity; 
	}
	});
	
	//Bunny Hood
	var bunnyButton = document.getElementById('bunnyImage');
	bunnyButton.addEventListener('click', function bunnyMaskButton() {
	var currentOpacity = parseFloat(getOpacity(bunnyButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		bunnyButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		bunnyButton.style.opacity = newOpacity; 
	}
	});
	
	//Don Gero's Mask
	var donGeroButton = document.getElementById('donGeroImage');
	donGeroButton.addEventListener('click', function donGeroMaskButton() {
	var currentOpacity = parseFloat(getOpacity(donGeroButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		donGeroButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		donGeroButton.style.opacity = newOpacity; 
	}
	});
	
	//Mask of Scents
	var scentsButton = document.getElementById('scentsImage');
	scentsButton.addEventListener('click', function scentsMaskButton() {
	var currentOpacity = parseFloat(getOpacity(scentsButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		scentsButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		scentsButton.style.opacity = newOpacity; 
	}
	});
	
	//Romani's Mask
	var romaniButton = document.getElementById('romaniImage');
	romaniButton.addEventListener('click', function romaniMaskButton() {
	var currentOpacity = parseFloat(getOpacity(romaniButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		romaniButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		romaniButton.style.opacity = newOpacity; 
	}
	});
	
	//Circus Leader's Mask
	var circusButton = document.getElementById('circusImage');
	circusButton.addEventListener('click', function circusMaskButton() {
	var currentOpacity = parseFloat(getOpacity(circusButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		circusButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		circusButton.style.opacity = newOpacity; 
	}
	});

	//Kafei's Mask
	var kafeisButton = document.getElementById('kafeisImage');
	kafeisButton.addEventListener('click', function kafeisMaskButton() {
	var currentOpacity = parseFloat(getOpacity(kafeisButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		kafeisButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		kafeisButton.style.opacity = newOpacity; 
	}
	});
	
	//Couple's Mask
	var couplesButton = document.getElementById('couplesImage');
	couplesButton.addEventListener('click', function couplesMaskButton() {
	var currentOpacity = parseFloat(getOpacity(couplesButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		couplesButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		couplesButton.style.opacity = newOpacity; 
	}
	});
	
	//Mask of Truth
	var truthButton = document.getElementById('truthImage');
	truthButton.addEventListener('click', function truthMaskButton() {
	var currentOpacity = parseFloat(getOpacity(truthButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		truthButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		truthButton.style.opacity = newOpacity; 
	}
	});
	
	//Kamaros Mask
	var kamarosButton = document.getElementById('kamarosImage');
	kamarosButton.addEventListener('click', function kamarosMaskButton() {
	var currentOpacity = parseFloat(getOpacity(kamarosButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		kamarosButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		kamarosButton.style.opacity = newOpacity; 
	}
	});
	
	//Gibdo Mask
	var gibdoButton = document.getElementById('gibdoImage');
	gibdoButton.addEventListener('click', function gibdoMaskButton() {
	var currentOpacity = parseFloat(getOpacity(gibdoButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		gibdoButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		gibdoButton.style.opacity = newOpacity; 
	}
	});
	
	//Garo's Mask
	var garosButton = document.getElementById('garosImage');
	garosButton.addEventListener('click', function garosMaskButton() {
	var currentOpacity = parseFloat(getOpacity(garosButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		garosButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		garosButton.style.opacity = newOpacity; 
	}
	});
	
	//Captain's Hat
	var captainsButton = document.getElementById('captainsImage');
	captainsButton.addEventListener('click', function captainsMaskButton() {
	var currentOpacity = parseFloat(getOpacity(captainsButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		captainsButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		captainsButton.style.opacity = newOpacity; 
	}
	});
	
	//Giant's Mask
	var giantsButton = document.getElementById('giantsImage');
	giantsButton.addEventListener('click', function giantsMaskButton() {
	var currentOpacity = parseFloat(getOpacity(giantsButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		giantsButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		giantsButton.style.opacity = newOpacity; 
	}
	});
//--------------------------Boss Remains-------------------------------------- 
	//Odolwa's Remains
	var odolwaButton = document.getElementById('odolwaImage');
	odolwaButton.addEventListener('click', function odolwaMaskButton() {
	var currentOpacity = parseFloat(getOpacity(odolwaButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		odolwaButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		odolwaButton.style.opacity = newOpacity; 
	}
	});
	
	//Goht's Remains
	var gohtButton = document.getElementById('gohtImage');
	gohtButton.addEventListener('click', function gohtMaskButton() {
	var currentOpacity = parseFloat(getOpacity(gohtButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		gohtButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		gohtButton.style.opacity = newOpacity; 
	}
	});
	
	//Gyorg's Remains
	var gyorgButton = document.getElementById('gyorgImage');
	gyorgButton.addEventListener('click', function gyorgMaskButton() {
	var currentOpacity = parseFloat(getOpacity(gyorgButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		gyorgButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		gyorgButton.style.opacity = newOpacity; 
	}
	});
	
	//Twinmold's Remains
	var twinmoldButton = document.getElementById('twinmoldImage');
	twinmoldButton.addEventListener('click', function twinmoldMaskButton() {
	var currentOpacity = parseFloat(getOpacity(twinmoldButton));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		twinmoldButton.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		twinmoldButton.style.opacity = newOpacity; 
	}
	});
//--------------------------Boss Remains-------------------------------------- 

	//Heart Containers

	$(document).ready(function(e){
    		$(".img-check").click(function(){
				$(this).toggleClass("heartStyle");
			});
	});*/
	
