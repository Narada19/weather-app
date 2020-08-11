
function forecase(){
	$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={e0c4eb7f729ebd156088982dcbb449d8}', 
		function(data) {
			console.log(data);
		}
	);
}
