function success(position) {  
 var status = document.querySelector('#status');  
 status.innerHTML = "¡Su ubicación!";  
 
 var mapcanvas = document.createElement('div');  
 mapcanvas.id = 'mapcanvas';  
 mapcanvas.style.height = '400px';  
 mapcanvas.style.width = '100%';  
 
 document.querySelector('#map').appendChild(mapcanvas);  
 
 var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);  
 var myOptions = {  
 zoom: 15,  
 center: latlng,  
 mapTypeControl: false,  
 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},  
 mapTypeId: google.maps.MapTypeId.ROADMAP  
 };  
 var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);  
 
 var marker = new google.maps.Marker({  
 position: latlng,  
 map: map,  
 title:"Usted está aquí."  
 });  
}  
 
function error(msg) {  
 var status = document.getElementById('status');  
 status.innerHTML= "Error [" + error.code + "]: " + error.message;   
}  
 
if (navigator.geolocation) {  
 navigator.geolocation.getCurrentPosition(success, error,{maximumAge:60000, timeout: 4000});  
} else {  
 error('Actualiza el navegador web para usar el API de localización');  
}  
 