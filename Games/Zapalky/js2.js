
id =1;
function create(){
	var iDiv = document.createElement('div');
	if (id<4){
	iDiv.id = id;
	iDiv.className = 'zapalka';
	iDiv.style.height = "110px";
	iDiv.style.width = "10px";
	iDiv.style.left = "10px";
	iDiv.style.top = "10px";
	iDiv.draggable = "true";
	iDiv.ondragstart =drag;

	// Now create and append to iDiv
	var omg= document.createElement('div');
	omg.style.width = "10px";
	omg.style.height = "100px";
	omg.style.backgroundColor = "yellow";
	iDiv.appendChild(omg);
	document.getElementsByTagName('body')[0].appendChild(iDiv);
	// The variable iDiv is still good... Just append to it.
	//iDiv.appendChild(innerDiv);
	id++;
}
}