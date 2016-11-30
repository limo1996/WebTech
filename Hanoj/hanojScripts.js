function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var arr = [];
    var arrFrom = [];
    var data = ev.dataTransfer.getData("text");
    var dragged = document.getElementById(data);

    if(ev.currentTarget.id == "firstColumn")
    {
        arr = firstStones;
    }
    else if(ev.currentTarget.id == "secondColumn")
    {
        arr = secondStones;
    }
    else
    {
        arr = thirdStones;
    }

    if(arr.length == 0 || parseInt(arr[arr.length - 1].style.width, 10) > parseInt(dragged.style.width, 10)){
        dragged.style.bottom = 20 * arr.length + "px";
        findAndRemove(dragged.parentElement, dragged);

        if(arr.length != 0 && arr[arr.length - 1] != dragged)
            arr[arr.length - 1].draggable = false;

        ev.target.appendChild(dragged);
        arr.push(dragged);
        checkEnd();
        moves++;
        document.getElementById('yourMoves').innerHTML = moves + " moves";
    }
}

function findAndRemove(parent, obj)
{
    objj = obj;
    if(parent.id == "firstColumn" || parent.parentElement.id == "firstColumn")
    {
        firstStones.pop();
        if(firstStones.length != 0)
            firstStones[firstStones.length - 1].draggable = true;
    }
    else if(parent.id == "secondColumn" || parent.parentElement.id == "secondColumn")
    {
        secondStones.pop();
        if(secondStones.length != 0)
            secondStones[secondStones.length - 1].draggable = true;
    }
    else
    {
        thirdStones.pop();
        if(thirdStones.length != 0)
            thirdStones[thirdStones.length - 1].draggable = true;
    }
}

var maxCount = 9;

function addRect(count)
{
    prevStick = firstStones;
    if(count > maxCount)
        count = maxCount;
    m_count = count;
    var div = document.getElementById("firstColumn");
    
    for(var i = 0; i < count; i++){
        var bg = i % 2 == 1 ? "#cc6600" : "#996633";
        var dragg = "false";
        if(i == count - 1)
            dragg = "true";
        var div2 = "<div id='stone" + i + "' style='width:" + (200 - 20*i) + "px;height:20px;background-color:" + bg + ";position:absolute;bottom:" + (i * 20) + "px;left:" + i * 10 + "px;border-radius:5px;color:white;font-size:15px;text-align: center;' draggable='" + dragg + "' ondragstart='drag(event)'>" + (count - i) + "</div>";
        div.innerHTML += div2;
    }

    for(var i = 0; i < count; i++)
        firstStones.push(document.getElementById('stone' + i));
}

var firstStones = [];
var secondStones = [];
var thirdStones = [];

var prevStick = [];
var m_count;
var seconds;
var moves;
var interval;

function checkEnd(){
    var won = false;
    if(firstStones.length == m_count && firstStones != prevStick)
    {
        prevStick = firstStones;
        document.getElementById('firstColumn').style.background = "green";
        won = true;
    }
    else if(secondStones.length == m_count && secondStones != prevStick)
    {
        prevStick = secondStones;
        document.getElementById('secondColumn').style.background = "green";
        won = true;
    }
    else if(thirdStones.length == m_count && thirdStones != prevStick)
    {
        prevStick = thirdStones;
        document.getElementById('thirdColumn').style.background = "green";
        won = true;
    }

    if(won){
        document.getElementById('endDiv').style.display = "block";
        clearInterval(interval);
    }
}

function restart(){
    firstStones = [];
    secondStones = [];
    thirdStones = [];

    var tmp = "<div class='stick'></div>";
    document.getElementById('thirdColumn').innerHTML = tmp;
    document.getElementById('secondColumn').innerHTML = tmp;
    document.getElementById('firstColumn').innerHTML = tmp;
    clean(false);
}

function clean(fromContinue){
    document.getElementById('thirdColumn').style.background = "white";
    document.getElementById('secondColumn').style.background = "white";
    document.getElementById('firstColumn').style.background = "white";
    document.getElementById('endDiv').style.display = "none";
    start(fromContinue);
}

function Continue(){   
    clean(true);
}

function start(fromContinue){
    seconds = 0;
    moves = 0;
    interval = setInterval(inFunc, 1000);
    document.getElementById('startDiv').style.display = "none";
    document.getElementById('statDiv').style.display = "block";
    var c;
    if(fromContinue)
    {
        c = m_count + 1;
        var tmp = "<div class='stick'></div>";
        document.getElementById('thirdColumn').innerHTML = tmp;
        document.getElementById('secondColumn').innerHTML = tmp;
        document.getElementById('firstColumn').innerHTML = tmp;
        firstStones.length = 0;
        secondStones.length = 0;
        thirdStones.length = 0;
    }
    else
        c = Number(document.getElementById('inCount').value);
    addRect(c);
}

function inFunc(){
    seconds++;
    var min = parseInt(seconds / 60, 10);
    var sec = seconds % 60;
    if(min < 10)
        min = "0" + min;
    if(sec < 10)
        sec = "0" + sec;
    document.getElementById('yourTime').innerHTML = min + ':' + sec;
}
