function initMap() {
    //  Options for map 
    var options = {
        zoom: 10,
        center: { lat: 53.350140, lng: -6.266155 }
    }
    var map = new google.maps.Map(document.getElementById('map'), options)

    /*    var marker = new google.maps.Marker({
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
    */
    // marker

    var markers = [{
            coords: { lat: 53.287126, lng: -6.3693697 },
            content: '<h1>Mao</h1>'
        },
        {
            coords: { lat: 53.2869435, lng: -6.3728213 },
            content: '<h1>WoW Burger</h1>'
        },
        {
            coords: { lat: 53.3442772, lng: -6.2515707 },
            content: '<h1>Camile</h1>'
        },
         {
            coords: { lat: 53.3434788, lng: -6.2624965 },
            content: '<h1>Zizzys</h1>'
        },
         {
            coords: { lat: 53.3421658, lng: -6.387406 },
            content: '<h1>TGI Fridays</h1>'
        },
    ]

    //loop through markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i])
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: 'http://maps.google.com/mapfiles/kml/pal2/icon32.png'
        });


        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
}
