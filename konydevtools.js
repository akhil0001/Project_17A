function checkIfKonyIsUsed ()
{
    "use strict"
    var konyDebug = window.kony;
    var infoTobeDisplayed = {};
    
    if( !konyDebug){
        return { error: "Kony framework is not used. May be this is either in production mode or using it in iframe mode"}
    }
    else{
        var konyGlobals = konyDebug.globals;
        infoTobeDisplayed['info'] = "Kony framework is used in this webpage";
        // infoTobeDisplayed['globals'] = konyGlobals;
        infoTobeDisplayed['App Name'] = konyGlobals['appid']
        infoTobeDisplayed['Is this MVC'] = konyGlobals['isMVC']
        infoTobeDisplayed['Current Form'] = konyGlobals['__currentForm']['id']
       
        return infoTobeDisplayed;
    }
}



chrome.devtools.panels.elements.createSidebarPane( 
"kony DOM",
function(sidebarpane){
    // sidebarpane.setpage('konydevtools.html')
    function updateElementProperties(){
    sidebarpane.setExpression("("+checkIfKonyIsUsed+")()");
    //console.log($0);
}
updateElementProperties();
chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
});


chrome.devtools.panels.create("Friday" , 
"icon.png",
"panel.html",
function(panel)
{
    //panel.setExpression("("+checkIfKonyIsUsed+")()");
    checkIfKonyIsUsed()
});