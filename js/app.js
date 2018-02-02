(function main(){

$('.btn').click(function(){
	var ville = $('.input1').val();
	//var lon = data.coord.lon;
	//var lat = data.coord.lat;

	if(ville != ""){
		$.ajax({
			url : "https://api.openweathermap.org/data/2.5/weather?q="+ ville + "&lang=fr" +"&units=metric"+"&APPID=d61362690139c0a87c76ea71d0d1b92f",
			dataType:"json",
			success: function(data){
						console.log("hello");
						console.log(data);
						var widget = show(data);
						$(".box").html(widget);
						$(".input1").val('');
						$(".error").hide();
					},
			});
	}else{
		$(".error").html("L'élément saisi n'est pas une ville !");
	}//fin if...else	

function show(data){
	return  "<h3>Météo à " + data.name + ", " + data.sys.country + "</h3>" +
			"<h3>Ciel: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>" +
			"<h3>Température: " + data.main.temp + "</h3>" +
			"<h3>pression: " + data.main.pressure + "</h3>" +
			"<h3>Humiditée: " + data.main.humidity + "</h3>" +
			"<h3>Min. Temperature: " + data.main.temp_min + "</h3>" +
			"<h3>Max. Temperature: " + data.main.temp_max + "</h3>" +
			"<h3>Vitesse vent: " + data.wind.speed + "</h3>" ;
			};

});//ferme click

})();//ferme main

