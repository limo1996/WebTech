$(function()
{
	var score = localStorage.getItem('highscore');
	$("#best").html(Number(Math.round(score+'e2')+'e-2'));
}
);
function play(a)
{
var i=0;
$("#but3").show();
$(".papier").draggable();
$(".plast").draggable();
$(".sklo").draggable();
$("#smet1").droppable(
{
  accept:".sklo",
  drop:function(event,ui)
  {
	 var id=$(ui.draggable).attr("id");
	 $("#"+id).hide(500);
	 $("#"+id).remove();
	 i++;
	 check_res(i,a);
  }
}
);
$("#smet2").droppable(
{
	accept:".plast",
	drop:function(event,ui)
	{
	  var id=$(ui.draggable).attr("id");
	  $("#"+id).hide(500);
	  $("#"+id).remove();
	  i++;
	  check_res(i,a);
	}
}
);
$("#smet3").droppable(
{
	accept:".papier",
	drop:function(event,ui)
	{
	  var id=$(ui.draggable).attr("id");
	  $("#"+id).hide(500);
	  $("#"+id).remove();
	  i++;
	  check_res(i,a);
	}
}
)
function check_res(i,a)
{
	if(i == 6 )
	{	
		var b = performance.now();
		$("#but1").show();
		var sucet=$("#score").html();
		sucet=sucet-(b - a)/1000;
		$("#score").html(sucet);
		alert("finished level");
		var level=$("#lvlnum").html();
		if(level == 6)
		{
			var highscore=$("#best").html()
			$("#but1").hide();
			$("#level").html("KONIEC HRY");
			$("#lvlnum").html("");
			if(sucet > highscore )
			{
				alert("Nový rekord !!!!");
				$("#best").html(sucet);
				localStorage.setItem('highscore',sucet);
			}
			if(sucet < 0)
			{
				alert("Žial, bol si veľmi pomalý, titul majstra recyklátora ti nie je možné udeliť");
			}
			else{
				alert("Gratulujem si majster RECYKLÁTOR");
			}
		}
	}
}
}
function initialize_sklo()
{
	$(".sklo").show();
}
function initialize_papier()
{
	$(".papier").show();
}
function initialize_plast()
{
	$(".plast").show();
}
function initialize()
{
	initialize_sklo();
	initialize_papier();
	initialize_plast();
	var x=Math.floor((Math.random() * 3) + 1);
	$("#but2").hide();
	$("#level").show();
	if(x ==1)
	{
		$("#lvl1").show();
	}
	else if(x == 2){
		$("#lvl1b").show();
	}
	else{
		$("#lvl1c").show();
	}
	$("#skore").show();
	$("#lvlnum").html("1");
	$("#score").html("222");
	var a = performance.now();
	play(a);
	$("#but1").hide();
}
function next()
{
	var temp=document.getElementById("lvlnum").innerHTML;
	temp++;
	var x=Math.floor((Math.random() * 3) + 1);
	if(x ==1)
	{
		$("#lvl"+temp).show();
	}
	else if(x==2){
		$("#lvl"+temp+"b").show();
	}
	else{
		$("#lvl"+temp+"c").show();
	}
	$("#lvlnum").html(temp);
	var a = performance.now();
	play(a);
	$("#but1").hide();
}
function restart()
{
	location.reload();
}
