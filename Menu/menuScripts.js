var navMenu;
function LoadMenu(activeItem, path){
    var rawFile = new XMLHttpRequest();
        rawFile.open("GET", path, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    var json = JSON.parse(allText);
                    navMenu = document.getElementById('menuBar');
                    var content = "<div class='navbar-header'>" +
                                        "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>" +
                                            "<span class='sr-only'>Toggle navigation</span>" +
                                            "<span class='icon-bar'></span>" +
                                            "<span class='icon-bar'></span>" +
                                            "<span class='icon-bar'></span>" +
                                        "</button>" +
                                    "<a class='navbar-brand' href='index.html#'>Home</a>" +
                                "</div>"+
                                "<div class='container'>" +
                                    "<div class='navbar-header'>" +
                                    "</div>" +
                                    "<div class='collapse navbar-collapse'>" +
                                        "<ul class='nav navbar-nav' id='navMenu'>";
                    for(var i = 0; i < json.MenuItems.length; i++) {
                        var element = json.MenuItems[i];
                        if(element.children.length != 0){
                            content += "<li>";
                            content += "<a href='" + element.href + "' class='dropdown-toggle' data-toggle='dropdown'>" 
                                + element.displayName + "<b class='caret'></b></a>";
                            content += "<ul class='dropdown-menu'>";
                            for(var j = 0; j < element.children.length; j++) {
                                var element2 = element.children[j];
                                if(element2.children.length != 0){
                                    if(element2.separator)
                                        content += "<li class='divider'></li>";
                                    content += "<li>";
                                    content += "<a href='" + element2.href + "' class='dropdown-toggle' data-toggle='dropdown'>" 
                                        + element2.displayName + "<b class='caret'></b></a>";
                                    content += "<ul class='dropdown-menu'>";

                                    for(var k = 0; k < element2.children.length; k++){
                                        var element3 = element2.children[k];
                                        if(element3.separator)
                                            content += "<li class='divider'></li>";
                                        content += "<li><a href='" + element3.href + "'>" + element3.displayName + "</a></li>";
                                        }
                                    content += "</ul></li>";
                                }
                                else{
                                    content += "<li" + isActive(activeItem, element2.displayName) + "><a href='" + 
                                        element2.href + "'>" + element2.displayName + "</a></li>";
                                }
                            }
                            content += "</ul></li>";
                        }
                        else{
                            content += "<li" + isActive(activeItem, element.displayName) + "><a href='" + 
                                element.href + "'>" + element.displayName + "</a></li>";
                        }
                    }
                    content += "</ul></div></div>";
                    content +="<ul class=\"breadcrumb\" id=\"breadCrumb\"></ul>"
                    navMenu.innerHTML = content;
                    breadVisit();
                }
            }
        }
    rawFile.send(null);
}

function isActive(first, second){
    if(first == second)
        return " class='active'";
    else
        return "";
}

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

  function breadVisit(){
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
  }
 //in footer insert this: <div id="visited">0</div>
 // in page insert this:  <ul class="breadcrumb" id="breadCrumb"></ul> ->BreadCrumb