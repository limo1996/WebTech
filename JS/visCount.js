 window.onload = function() {
  var count = localStorage.getItem('visCount');
  var last_seen = localStorage.getItem('lastSeen');

	if (!count || !last_seen) { 
    count = 1;
		localStorage.setItem('lastSeen', new Date());
    localStorage.setItem('visCount', count);
	} 
  //a visit lasts for 10 minutes
  if(last_seen && (((new Date())-Date.parse(last_seen))>600000)){ 
    count++;
    localStorage.setItem('visCount', count);
    localStorage.setItem('lastSeen', new Date());
  } 
  $("#visited").val(count);
 }
 //in footer insert this: <p>Si na stránke: <output id="visited">0</output>X</p>