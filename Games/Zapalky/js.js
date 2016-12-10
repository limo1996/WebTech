var body = 11;
var bodyy =0;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    body = body-1;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dragDiv = document.getElementById(data)
    var dropDiv = ev.target;
    //  console.log(dragDiv.id)
        if(dropDiv.childNodes.length == 1){
    var castZaplaky = dragDiv.childNodes[0];
    var w  = castZaplaky.style.width;
    var h = castZaplaky.style.height;
    var tmp = document.getElementById("tmp");
    var left = tmp.style.left;
    var top = tmp.style.top;
    dragDiv.style.left = left;
    dragDiv.style.top =top;	
  //  console.log(zaciatok.sort())
    if(dragDiv.style.width != dropDiv.style.width)
    {
    	dragDiv.style.width =dropDiv.style.width;
    	dragDiv.style.height =dropDiv.style.height;
    	castZaplaky.style.width = h;
    	castZaplaky.style.height = w;

    }
    var a = dropDiv.innerHTML;
    var index = zaciatok.indexOf(Number(dragDiv.id));
    zaciatok[index] = Number(a);
    dragDiv.id = a;
    ev.target.appendChild(dragDiv);
    console.log(zaciatok);
    console.log(vysledky[j]);
    var zaciatokSort = zaciatok.sort();
    var vysledkySort  = vysledky[j].sort();
    if(zaciatokSort.toString() == vysledkySort.toString()){
    	var omggg  = document.getElementById('nextDivv');

            omggg.id = 'nextDiv';
                console.log(body);
                bodyy = bodyy + body;
                if(bodyy > bestScore){
                    bestScore = bodyy;
                    localStorage.setItem('bodyy', bodyy);
                }
                body = 11;
    }
	}
}


