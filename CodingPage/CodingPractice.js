function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

function apiVisibility() {
	var menu = document.getElementById("apiMenu");
	
	if (menu.style.display === "none"){
		menu.style.display = "block";
	}else{
		menu.style.display = "none";
	}
}

function gamesVisibility() {
	var menu = document.getElementById("gameMenu");
	
	if (menu.style.display === "none"){
		menu.style.display = "block";
	}else{
		menu.style.display = "none";
	}
}
	

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
