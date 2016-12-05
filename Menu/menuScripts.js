var navMenu;
function LoadMenu(activeItem){
    var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "Menu/menu.json", false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    var json = JSON.parse(allText);
                    navMenu = document.getElementById('navMenu');
                    var content = "";
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

                    navMenu.innerHTML = content;
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