<<<<<<< HEAD
function checkIfKonyIsUsed ()
{
    "use strict"
    var konyDebug = window.kony;
    var infoTobeDisplayed = {};
    // var messsage =""
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
        // message = infoTobeDisplayed;
        return infoTobeDisplayed;
    }

    //chrome.extension.sendMessage(message,function(message){})
=======
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
>>>>>>> 9abcaef8c209bcb928166ec33b49709eb52acfc9
        
// }



<<<<<<< HEAD
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
=======
// chrome.devtools.panels.elements.createSidebarPane( 
// "kony DOM",
// function(sidebarpane){
//     // sidebarpane.setpage('konydevtools.html')
//     function updateElementProperties(){
//     //sidebarpane.setExpression("("+checkIfKonyIsUsed+")()");
//     //console.log($0);
// }
// updateElementProperties();
// chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
// });

// function handleShown()
// {

// }

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
>>>>>>> 9abcaef8c209bcb928166ec33b49709eb52acfc9



<<<<<<< HEAD
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
=======
//new code

chrome.devtools.panels.create('B.A.R.F', 'icon_ironman.png','panel.html', function (panel){
 var _window; //This holds reference to panel html window
console.log(panel);

 var data = [];
 var port = chrome.runtime.connect({name: 'devtools'});

 port.onMessage.addListener(function(msg){

    if(_window) {
        _window.do_something(msg);
    } else {
        data.push(msg);
    }
 });
    // panel.onShown.addListener(function tmp(panelWindow){
    //   //  panel.onShown.removeListener(tmp);
    //     _window = panelWindow;

    //     var msg;
    //     while(msg = data.shift())
    //     _window.do_something(msg);

    //     _window.respond = function(msg){
    //         port.postMessage(msg);
    //     };
    // });
    chrome.runtime.sendMessage({
        tabId: chrome.devtools.inspectedWindow.tabId,
        scriptToInject: "content-script.js"
    })
});

>>>>>>> 9abcaef8c209bcb928166ec33b49709eb52acfc9
