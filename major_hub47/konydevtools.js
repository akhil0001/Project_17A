
function checkIfKonyIsUsed ()
{
    "use strict"
    var konyDebug = window.kony;
    var infoTobeDisplayed = {};
    // var messsage =""
    var path =""
    if( !konyDebug){
        return { error: "Kony framework is not used. May be this is either in production mode or using it in iframe mode"}
        //message = { error: "Kony framework is not used. May be this is either in production mode or using it in iframe mode"}
    }
    else{
        var konyGlobals = konyDebug.globals;
        infoTobeDisplayed['Info'] = "Kony framework is used in this webpage";
        // infoTobeDisplayed['globals'] = konyGlobals;
        infoTobeDisplayed['App Name'] = konyGlobals['appid']
        infoTobeDisplayed['Is this MVC'] = konyGlobals['isMVC']
        infoTobeDisplayed['Current Form'] = konyGlobals['__currentForm']['id']
        let currentForm = konyGlobals['__currentForm']
        infoTobeDisplayed[konyGlobals['__currentForm']['id']] = currentForm.children
        for(let i=0; i<currentForm.children.length; i++){
            infoTobeDisplayed[currentForm.children[i]] = konyGlobals['__currentForm'][currentForm.children[i]]['children'];
        }
        if(!window.kony.globals.path)
        {
            window.kony.globals.path = "";
        }
        window.kony.globals.path =  window.kony.globals.path +"->"+ currentForm.id;
        infoTobeDisplayed['path'] = window.kony.globals.path
        // message = infoTobeDisplayed;
        //document.body.textContent = infoTobeDisplayed;
        return infoTobeDisplayed;
    }
}
    //chrome.extension.sendMessage(message,function(message){})
// function checkIfKonyIsUsed ()
// {
//     "use strict"
//     var konyDebug = window.kony;
//     var infoTobeDisplayed = {};
//     var messsage =""
//     if( !konyDebug){
//         //return { error: "Kony framework is not used. May be this is either in production mode or using it in iframe mode"}
//         message = { error: "Kony framework is not used. May be this is either in production mode or using it in iframe mode"}
//     }
//     else{
//         var konyGlobals = konyDebug.globals;
//         infoTobeDisplayed['info'] = "Kony framework is used in this webpage";
//         // infoTobeDisplayed['globals'] = konyGlobals;
//         infoTobeDisplayed['App Name'] = konyGlobals['appid']
//         infoTobeDisplayed['Is this MVC'] = konyGlobals['isMVC']
//         infoTobeDisplayed['Current Form'] = konyGlobals['__currentForm']['id']
//         message = infoTobeDisplayed;
//         //return infoTobeDisplayed;
//     }

//     chrome.extension.sendMessage(message,function(message){})
        
// }



chrome.devtools.panels.elements.createSidebarPane( 
"kony DOM",
function(sidebarpane){
     sidebarpane.setPage('panel.html')
    function updateElementProperties(){
    sidebarpane.setExpression("("+checkIfKonyIsUsed+")()");
    
}
updateElementProperties();
chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
});



// chrome.devtools.panels.create("Friday" , 
// "icon.png",
// "panel.html",
// function(panel)
// {
//     panel.onShown.addListener(handleShown);
//     panel.onHidden.addListener(handleClosed);
//     //panel.setExpression("("+checkIfKonyIsUsed+")()");
//     checkIfKonyIsUsed()
// });

// function handleClosed()
// {
//     alert('This has been closed')
// }

 var port = chrome.extension.connect({name: "test"});
port.postMessage({msg: "testing"});