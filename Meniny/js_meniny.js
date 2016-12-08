
var dia = "áäčďéíľĺňóôŕšťúýÁČĎÉÍĽĹŇÓŠŤÚÝŽ";
var nodia = "aacdeillnoorstuyACDEILLNOSTUYZ";
var mena = [];
var menaa = [];
var dni = [];

function diaConvert(text) {
   var convertText = "";
   for(i=0; i<text.length; i++) {
      if(dia.indexOf(text.charAt(i))!=-1) {
         convertText += nodia.charAt(dia.indexOf(text.charAt(i)));
      }
      else {
         convertText += text.charAt(i);
      }
   }
   return convertText;
}

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "xml_meniny.xml", true);
  xmlhttp.send();


}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;

  mena = xmlDoc.getElementsByTagName('SK');
  dni = xmlDoc.getElementsByTagName('den');

  for (i = 0; i <mena.length; i++) {
    menaa[i] = diaConvert(mena[i].childNodes[0].nodeValue).toLowerCase() ;
  }

   actualName();
}


function getDate(meno){

  var b = diaConvert(String(meno)).toLowerCase() ;

  for (i = 0; i <menaa.length; i++) {
    if( menaa[i] == b){
      var pole = mena[i].parentNode.childNodes;
      console.log(pole[1].innerHTML);
      break;
    }
   }
  document.getElementById("vypisMeno").innerHTML = pole[3].innerHTML + " ma meniny "+ pole[1].innerHTML;


}

function getName(date){
 // var b = dateConvert(String(date)) ;  
 var b = String(date);
 console.log("zaciatok");
  for (i = 0; i <dni.length; i++) {
    if(dni[i].childNodes[0].nodeValue == b){
      var pole = dni[i].parentNode.childNodes;
      console.log(pole[3].innerHTML);
      break;
    }  
   }
  document.getElementById("vypisDatum").innerHTML = pole[1].innerHTML + " ma meniny "+ pole[3].innerHTML;

}

function actualName(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+dd;

for (i = 0; i <dni.length; i++) {
    if(dni[i].childNodes[0].nodeValue == today){
      var pole = dni[i].parentNode.childNodes;
      console.log(pole[3].innerHTML);
      document.getElementById("demo").innerHTML = "Dnes ma meniny "+ pole[3].innerHTML;
      break;
    }
}
}
