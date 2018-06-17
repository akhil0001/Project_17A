
(function () {
    console.log("Starting the content script!");

    
    function injectedScript(){
       // var konion = "Hello";
        var counter = 0;
       
        // console.log(JSON.stringify(konion));
        function sendKonyObject() {
            if(kony){
            var konion = {};
            konion.currentForm = {}
            var refinedJSON = {}
            var konyGlobalsConstant = kony.globals;
            // var keys = Object.keys(konyGlobalsConstant.__currentForm);
            // keys.forEach(element => {
            //     console.log(typeof(konyGlobalsConstant.__currentForm[element]));
            //     if(typeof(konyGlobalsConstant.__currentForm[element]) !== 'function'){
            //     konion.currentForm[element] = konyGlobalsConstant.__currentForm[element];
            //         console.log('true');
            // }
            // console.log('false');
            // });
            window.kony.getChildren = function(name){
                
                return kony.globals.__currentForm[name].children;
            }
            konion.currentForm = {};
            konion.appid = konyGlobalsConstant.appid;
            konion.apptitle = konyGlobalsConstant.apptitle;
            konion.buildmode = konyGlobalsConstant.build;
            //konion.i18n = JkonyGlobalsConstant.i18nArray;
            konion.AppVersion = konyGlobalsConstant.version;
            konion.currentForm.children = konyGlobalsConstant.__currentForm.children;
            konion.currentForm.id = konyGlobalsConstant.__currentForm.id;
            //debugger;
            window.postMessage({
                name: konion,
                source : 'chrome-devtools-extension',
                type:'kony_detect_true'
            }, '*');
        }
        }
        // var mutationObserver = new MutationObserver(function(mutations) {
        //     mutations.forEach(function(mutation) {
        //         sendKonyObject()
        //     });
        //   });
        // function addObserverIfDesiredNodeAvailable() {
        //     var composeBox = document.querySelectorAll("#__MainContainer")[0];
        //     if(!composeBox) {
        //         //The node we need does not exist yet.
        //         //Wait 500ms and try again
        //         window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        //         return;
        //     }
        //     mutationObserver.observe(composeBox, {
        //         attributes: true,
        //         childList: true,
        //         subtree: true
        //       }); 
        // }
        // addObserverIfDesiredNodeAvailable();
       
    setInterval(sendKonyObject , 1000);
    
    }

    //Inject the injected_script
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('('+ injectedScript +')()'));
    (document.body || document.head || document.documentElement).appendChild(script);


    window.addEventListener('message', function(event) {
        // Only accept messages from the same frame
        if (event.source !== window) {
            return;
        }

        var message = event.data;

        // Only accept messages that we know are ours
        if (typeof message !== 'object' || message === null ||
            !message.source === 'chrome-devtools-extension') {
            return;
        }

        //Forward the message
 // console.log('============1',message);
        //debugger;
        chrome.runtime.sendMessage(message);

        // chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
        //     console.log(message);
        // })
        
    });
})();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Messages from content scripts should have sender.tab set
    //chrome.runtime.sendMessage()
    //injectedScript();
    console.log('======I am in the con====');
    //debugger;
   
});