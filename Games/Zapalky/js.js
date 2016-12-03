function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dragDiv = document.getElementById(data)
    var dropDiv = ev.target;
    console.log(vysledky[1])
     console.log(dropDiv.childNodes[0])
        if(dropDiv.childNodes.length == 1){
    var castZaplaky = dragDiv.childNodes[0];
    var w  = castZaplaky.style.width;
    var h = castZaplaky.style.height;
    var tmp = document.getElementById("tmp");
    var left = tmp.style.left;
    var top = tmp.style.top;
    dragDiv.style.left = left;
    dragDiv.style.top =top;	

    if(dragDiv.style.width != dropDiv.style.width)
    {
    	dragDiv.style.width =dropDiv.style.width;
    	dragDiv.style.height =dropDiv.style.height;
    	castZaplaky.style.width = h;
    	castZaplaky.style.height = w;

    }
    ev.target.appendChild(dragDiv);
	}
}


