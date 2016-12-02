#Pokyny ku pridavaniu menu item

Pozrite si subor Menu/menu.json  

{  
    "MenuItems":  
    [  
        {  
            "displayName": "Menu1",       <= POLOZKA PRVEJ UROVNE  
            "href": "#",  
            "separator": false,  
            "children":   
            [  
                {  
                    "displayName": "Menu1.1",       <= POLOZKA DRUHEJ UROVNE   
                    "href": "#",  
                    "separator": false,  
                    "children":   
                    [  
                        { "displayName": "Menu1.1.1", "href": "#", "separator": false, "children": [] },    <= POLOZKA TRETEJ UROVNE  
                        { "displayName": "Menu1.1.2", "href": "#", "separator": false, "children": [] },  
                        { "displayName": "Menu1.1.3", "href": "#", "separator": false, "children": [] }  
                    ]  
                }  
            ]  
        }  
    ]  
}  
  

#Povinne polozky
displayName = nazov polozky, ktora sa zobrazi v menu  
href = link, kde ma polozka ukazovat  
separator = true ak ma byt nad nou separator, false ak nie  
children = polozky nizsej urovne  