 function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.350140, lng: -6.266155},
          zoom: 10,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });




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

 

////---------------------email service


function sendMail(contactForm) {
    emailjs.send("gmail", "project_two", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}