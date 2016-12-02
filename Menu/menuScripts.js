function LoadMenu(activeItem){
    var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "menu.json", false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    var json = JSON.parse(allText);
                    var navMenu = document.getElementById('navMenu');
                    json.MenuItems.forEach(function(element) {
                        
                        if(element.children.length != 0){
                            navMenu += "<li>";
                            navMenu.innerHTML += "<li" + isActive(activeItem, element.displayName) + "><a href='" + 
                                element.href + "'>" + element.displayName + "</a></li>";
                            
                            navMenu.innerHTML += "<ul class='dropdown-menu'>";
                            element.children.forEach(function(element) {
                                if(element.children.length != 0){
                                    navMenu += "<li>";
                                    navMenu.innerHTML += "<li" + isActive(activeItem, element.displayName) + "><a href='" + 
                                        element.href + "'>" + element.displayName + "</a></li>";
                                        navMenu.innerHTML += "<ul class='dropdown-menu'>";

                                        element.children.forEach(function(element){
                                            navMenu.innerHTML += "<li" + isActive(activeItem, element.displayName) + "><a href='" + 
                                                element.href + "'>" + element.displayName + "</a></li>";
                                        }, this);
                                }
                            }, this);
                            navMenu += "</li>";
                        }
                        else{
                            navMenu.innerHTML += "<li" + isActive(activeItem, element.displayName) + "><a href='" + 
                                element.href + "'>" + element.displayName + "</a></li>"
                        }
                    }, this);
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