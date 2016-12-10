function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(48.151877, 17.073340),
        zoom: 7
    };
    map = new google.maps.Map(mapCanvas, mapOptions);

    setMarkers('../Files/pamiatky.json');
}

var map;
var x1 = 49.893344;
var y1 = 16.541465;

var x2 = 47.689842; 
var y2 = 22.892938;

function setMarkers(path) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var json = JSON.parse(allText);
                var wrapper = document.getElementById('mapWrapper');

                json.pamiatky.forEach(function (element) {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(element.lat, element.lon),
                        label: element.label
                    });

                    var contentString = '<div id="content">' +
                        '<h1 id="firstHeading" class="firstHeading" style="color:black;margin-top:0px;">' + element.nazov +'</h1>' +
                        '<div id="bodyContent style="color:black;">' +
                        '<p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;' + element.poloha + '</p>'
                        '<p><span class="glyphicon glyphicon-flag"></span>&nbsp;' + element.rokVzniku + '</p>' +
                        'Coordinates: N' + element.lat + ', E' + element.lon + ',' +
                        '</div>' +
                        '</div>';

                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    marker.addListener('click', function () {
                        infowindow.open(map, marker);
                    });
                    marker.setMap(map);
                    var bottom = ((100 * (element.lat - x2)) / (x1 - x2) + 8) + "%";
                    var left = ((100 * (element.lon - y1)) / (y2 - y1) + 1) + "%";
                    wrapper.innerHTML += "<img alt='Pin' src='pin.png' class='pins' style='left:" + ";bottom:" + bottom + ";left:" + left + "'/>"

                }, this);
            }
        }
    }
    rawFile.send(null);
}