
(function () {
    var textNode = "";
    var globalMessage = "";
    log("================Devtools extension is running========from devtools_panel.js========== ");

    var messageDiv = document.getElementById("text");
    
    var backgroundPageConnection = chrome.runtime.connect({
        name: "DevtoolsExtention"
    });

    log("Hello from the devtools panel");

    
    backgroundPageConnection.onMessage.addListener(function (message) {
       
        // Handle responses from the background page, if any
        if(message.name&& message.source === "chrome-devtools-extension")
        {
            //log("DevtoolsExtention panel : new message ");
            console.log(message.name);
        messageDiv.textContent = 'current App Name: '+ message.name.appid+ '<br>' + message.name.currentForm.id;
        globalMessage = message;
        }
    });

    var buttonWidget = document.getElementById('getInfo');

    function executeThescript(){
        backgroundPageConnection.postMessage({
            name: 'execScript',
            tabId: chrome.devtools.inspectedWindow.tabId,
            scriptToInject: "content_script.js"
        });
    }
    executeThescript();
    

    var buttonWidget2 = document.getElementById('showChildren');
    buttonWidget2.addEventListener("click",function(){
        if(globalMessage.name.currentForm.children.length>0)
        displayAllChildren(globalMessage.name.currentForm.children)
    })
    //setTimeout(
        function establishConnection () {
        backgroundPageConnection.postMessage({
            name: 'init',
            tabId: chrome.devtools.inspectedWindow.tabId
        });

       
    // }, 10000);
    }
    establishConnection();

    function log(message){
        chrome.devtools.inspectedWindow.eval(
            "console.log(' %c Devtools skeleton extension: " + message + "'," +
            " 'background: #222; color : #bada55')", function(result, isException){

            });
    }

    function setVisibilityOff(textNode)
    {
        chrome.devtools.inspectedWindow.eval(
            'window.kony.getChildren("'+textNode+'")',
            function(result,isException){
                if(result.length>0)
                displayAllChildren(result);
                else{}
            }
        );

    }

    function displayAllChildren(result) {
        result.forEach(element => {
            var btn = document.createElement("BUTTON");
    var t = document.createTextNode(element);
    btn.appendChild(t);
    document.body.appendChild(btn);
    btn.addEventListener('click',function(){
        setVisibilityOff(element)
    });
        });
    }


})();