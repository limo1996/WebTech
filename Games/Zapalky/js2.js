var pole = [["110px","10px","275px","170px","100px","10px"],
			["110px","10px","395px","170px","100px","10px"],
			["110px","10px","515px","170px","100px","10px"],
			["110px","10px","275px","530px","100px","10px"],
			["110px","10px","395px","530px","100px","10px"],
			["110px","10px","515px","530px","100px","10px"],
			["110px","10px","275px","890px","100px","10px"],
			["110px","10px","395px","890px","100px","10px"],
			["110px","10px","515px","890px","100px","10px"],
			["10px","110px","285px","160px","10px","100px"],
			["10px","110px","285px","280px","10px","100px"],
			["10px","110px","285px","520px","10px","100px"],
			["10px","110px","285px","640px","10px","100px"],
			["10px","110px","285px","880px","10px","100px"],
			["10px","110px","285px","1000px","10px","100px"],
			["10px","110px","405px","160px","10px","100px"],
			["10px","110px","405px","280px","10px","100px"],
			["10px","110px","405px","520px","10px","100px"],
			["10px","110px","405px","640px","10px","100px"],
			["10px","110px","405px","880px","10px","100px"],
			["10px","110px","405px","1000px","10px","100px"],
			["10px","110px","345px","400px","10px","100px"],];

var kola = [[1,3,4,5,6,7,8,9,10,11,13,15,16,17,19,20,22],
			[1,2,3,7,8,9,10,13,14,15,17,19,20,21],
			[1,2,3,4,6,7,8,9,10,11,12,13,14,17,18,19,21,22],
			[1,2,3,4,8,11,13,14,15,17,19,21],
			[1,2,3,4,5,6,7,8,9,10,12,13,14,16,17,19,21,22],
			[1,2,3,4,5,6,7,8,9,10,12,14,15,17,19,20,21,22],
			[1,3,4,5,6,7,8,9,10,11,13,14,15,16,17,19,21,22],
			[1,2,3,4,6,7,8,9,11,12,13,15,17,18,19,20,22],
			[1,2,3,4,5,6,7,8,9,10,11,12,14,16,17,18,19,20,21],
			[4,6,7,11,12,13,15,17,18,19,21,22]];

var vysledky = [[1,3,4,5,6,7,8,9,10,11,13,15,16,17,18,20,22],
			[1,2,3,7,8,9,10,13,14,17,19,20,21,22],
			[1,2,3,4,6,7,8,9,10,11,12,13,14,15,17,18,19,21],
			[1,2,3,8,11,13,14,15,17,19,21,22],
			[1,2,3,4,5,6,7,8,9,10,13,14,15,16,17,19,21,22],
			[1,2,3,4,5,6,7,8,9,10,13,14,15,17,19,20,21,22],
			[1,2,3,4,5,6,7,8,9,10,13,14,15,16,17,19,21,22],
			[1,2,3,4,6,7,8,9,11,12,13,15,16,18,19,20,22],
			[1,3,4,5,6,7,8,9,10,11,12,14,16,17,18,19,20,21,22],
			[4,5,6,7,11,12,15,17,18,19,21,22]]

var zaciatok;
var bestScore;
 i =0;
j=1;
function create(){
	zaciatok = kola[j];
	for(i=0;i<kola[j].length;i++){
	var iDiv = document.createElement('div');
	iDiv.id = kola[j][i];
	iDiv.className = 'zapalka';
	iDiv.style.width = pole[kola[j][i]-1][0];
	iDiv.style.height = pole[kola[j][i]-1][1];
	iDiv.style.top = pole[kola[j][i]-1][2];
	iDiv.style.left = pole[kola[j][i]-1][3];
	iDiv.draggable = "true";
	iDiv.ondragstart =drag;

	// Now create and append to iDiv
	var omg= document.createElement('div');
	omg.style.width = pole[kola[j][i]-1][4];
	omg.style.height = pole[kola[j][i]-1][5];
	omg.style.backgroundColor = "yellow";
	iDiv.appendChild(omg);
	document.getElementsByTagName('body')[0].appendChild(iDiv);
	// The variable iDiv is still good... Just append to it.
	//iDiv.appendChild(innerDiv);
	
}
}


function next(){
	j++;
	if(j == 10){
		j = 0;
	}
	var i=0;
	for(i = 0 ; i<zaciatok.length; i++){
	var elem = document.getElementById(zaciatok[i]);
 	elem.parentElement.removeChild(elem);
 	}
 	document.getElementById('scoree').innerHTML = bestScore.toString();
 	document.getElementById('lvl').innerHTML = "Level: " + j.toString();
 	document.getElementById('aktuall').innerHTML =bodyy.toString();
	create();
}

function start(){
	var omg  = document.getElementById('startDiv');
	bestScore = localStorage.getItem('bodyy');
	if(bestScore == null){
		bestScore =0;
	}
 	document.getElementById('scoree').innerHTML = bestScore.toString();

	omg.id = 'startDivv';
	document.getElementById('lvl').innerHTML = "Level: " + j.toString();
	create();
}

function nextt(){
	var omgg  = document.getElementById('nextDiv');
	omgg.id = 'nextDivv';
	next();
}