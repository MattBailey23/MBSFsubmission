var getOpacity = function(el) {
	return el.style.opacity;
}

function changeOpacity(elem){
	//var dekuButton = document.getElementById('dekuImage');
	var currentOpacity = parseFloat(getOpacity(elem));
	if(currentOpacity == 0.3){
		var newOpacity = 1.0;
		elem.style.opacity = newOpacity;
	}else if (currentOpacity == 1.0){
		var newOpacity = 0.3;
		elem.style.opacity = newOpacity; 
	}
}