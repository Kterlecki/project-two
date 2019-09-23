function initMap(){
            //  Options for map 
            var options = {
                zoom:10,  
                center: {lat:53.350140,lng:-6.266155}
            }
            var map = new google.maps.Map(document.getElementById('map'), options)
        
    var marker = new google.maps.Marker({
        position:{lat:53.287126, lng:-6.3693697},
        map:map,
        icon:'http://maps.google.com/mapfiles/kml/pal2/icon32.png'
    });
    
    var infoWindow= new google.maps.InfoWindow({
        content:'<h1>Mao</h1>'
    });
    
    marker.addListener('click',function(){
        infoWindow.open(map, marker);
    })
}
        