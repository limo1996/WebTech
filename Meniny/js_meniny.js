
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

function convertDate(date){
    var  tmp = String(date).split(".");
    var dd = tmp[0];
    var mm  = tmp[1];
    console.log(Number(tmp[1]));
    if(Number(dd)<10) {
    dd='0'+String(Number(dd));
    } 

    if(Number(mm)<10) {
        mm='0'+String(Number(mm));
    } 

    console.log(mm+dd);

  return  mm+dd;
}

function ConvertToDate(date){
    var  tmp = String(date).split("");
   

  return  tmp[2]+tmp[3]+'.'+tmp[0]+tmp[1];
}

function getDate(meno){

  var b = diaConvert(String(meno)).toLowerCase() ;

  for (i = 0; i <menaa.length; i++) {
    if( menaa[i].search(b) != -1){
      var pole = mena[i].parentNode.childNodes;
      break;
    }
   }
  document.getElementById("vypisMeno").innerHTML = pole[3].innerHTML + " ma meniny "+ ConvertToDate(pole[1].innerHTML);


}

function getName(date){
 var b = convertDate(date);
  for (i = 0; i <dni.length; i++) {
    if(dni[i].childNodes[0].nodeValue == b){
      var pole = dni[i].parentNode.childNodes;
      break;
    }  
   }
  document.getElementById("vypisDatum").innerHTML = ConvertToDate(pole[1].innerHTML) + " ma meniny "+ pole[3].innerHTML;

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

today = mm.toString()+dd.toString();

for (i = 0; i <dni.length; i++) {
    if(dni[i].childNodes[0].nodeValue == today){
      var pole = dni[i].parentNode.childNodes;
      document.getElementById("demo").innerHTML = "Dnes ma meniny "+ pole[3].innerHTML;
      break;
    }
}
}
