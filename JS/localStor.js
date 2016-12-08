 function load (items) {
		var lis = "";
		for (i = 0; i < items.length-1; i++) 
			lis += "<li><a href=\"" + items[i].href + "\" title=\"" + items[i].title + "\">" + items[i].title  + "</a></li>";
    lis += "<li class=\"active\">" + items[i].title  + "</a></li>";
    $("#breadCrumb").html(lis);
	}

  Storage.prototype.setObject = function(object) {
      this.setItem("breadcrumbs", JSON.stringify(object));
  };

  Storage.prototype.getObject = function() {
    var obj = this.getItem("breadcrumbs");
    if(obj !== null)
      return JSON.parse(obj);
      
    return new Array();

  };

  Storage.prototype.push = function(object) {
    var obj = this.getObject();
    if(obj instanceof Array) {
      obj.push(object);
    } else {
      obj = new Array();
      obj.push(object);
    }
    this.setObject(obj);
  };

  Storage.prototype.len = function() {
    var obj = this.getObject();
    if(!(obj instanceof Array)) {
      obj = new Array();
      this.setObject(obj);
    }

    return obj.length;
  };


  Storage.prototype.shift = function() {
    var obj = this.getObject(),
        r;
    if(obj instanceof Array) {
      r = obj.shift();
    } else {
      obj = new Array();
    }
    this.setObject(obj);
    return r;
  };
  
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
$("#visited").text("Si na stránke: "+count+"x");
 
var ls = localStorage.getObject();
if(!(ls.length > 0 && ls[ls.length -1].href == document.URL)) {
	localStorage.push({title: $('title').eq(0).text() ,href: document.URL });
	while(localStorage.len() > 5)
		localStorage.shift();
}
var items = localStorage.getObject();
load(items);
 //in footer insert this: <div id="visited">0</div>
 // in page insert this:  <ul class="breadcrumb" id="breadCrumb"></ul> ->BreadCrumb