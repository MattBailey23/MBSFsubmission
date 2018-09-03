var weatherContainer;
var btn;
var weatherData;

function initialize(){
	weatherContainer = document.getElementById("weatherContainer");
	btn = document.getElementById("btn");
	btn.addEventListener('click', fetchData);
	document.getElementById("weatherTable").style.visibility = "hidden";
}
 
function renderHTML(weatherData){
	
	if(document.getElementById("weatherTable").style.visibility === "hidden"){
		document.getElementById("weatherTable").style.visibility = "visible";
	}
	
	//Convert Kelvin to Fahrenheit
	var kelv = parseFloat(weatherData.main.temp);
	var fahr = kelv * (9/5) - 459.67;
	
	var table = document.getElementById("weatherTable");
	
	var newRow = document.createElement('tr');
	var tdCity = document.createElement('td');
	var tdWeather = document.createElement('td');
	var tdTemp = document.createElement('td');
	
	var textCity = document.createTextNode(weatherData.name);
	var textWeather = document.createTextNode(weatherData.weather[0].description);
	var textTemp = document.createTextNode(Math.round(fahr * 10)/10);
	
	tdCity.appendChild(textCity);
	tdWeather.appendChild(textWeather);
	tdTemp.appendChild(textTemp);
	
	newRow.appendChild(tdCity);
	newRow.appendChild(tdWeather);
	newRow.appendChild(tdTemp);
	
	table.appendChild(newRow);
}

function fetchData(){
	var city = document.getElementById("cityField").value;
	
	if(city === ""){
			window.alert("Please enter a zip code or City, Country Code");
	}else{
		var request = new XMLHttpRequest();
		request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=8c0a9991ba0a11ca5d7c30ed1ba0595a');
		request.onload = function(){
			weatherData = JSON.parse(request.responseText);
			console.log(weatherData);
			renderHTML(weatherData);
			};
		request.send();
		
	}
		
}
//Add to fetchData() method if using Zip Code to detect City/Location
/*if(city === ""){
			var request = new XMLHttpRequest();
			request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+zip+'&appid=8c0a9991ba0a11ca5d7c30ed1ba0595a');
			request.onload = function(){
				weatherData = JSON.parse(request.responseText);
				console.log(weatherData);
				renderHTML(weatherData);
				};
			request.send();
		}else /*if(zip === ""){*/