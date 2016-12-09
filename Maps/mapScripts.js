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
var x1 = 49.645483;
var y1 = 16.661879;

var x2 = 47.960144;
var y2 = 22.784962;

function setMarkers(path){
    var rawFile = new XMLHttpRequest();
        rawFile.open("GET", path, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    var json = JSON.parse(allText);
                    var wrapper = document.getElementById('mapWrapper');

                    json.pamiatky.forEach(function(element) {
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(element.lat, element.lon),
                            label: element.label
                            });
                        marker.setMap(map);
                        var bottom = ((100 * (element.lat - x2)) / (x1 - x2)) + "%";
                        var left = (100 * (element.lon - y1)) / (y2 - y1) + "%";
                        wrapper.innerHTML += "<img alt='Pin' src='pin.png' class='pins' style='left:" + ";bottom:"+ bottom + ";left:"+ left + "'/>"
                        
                    }, this);
                }
            }
        }
    rawFile.send(null);
}