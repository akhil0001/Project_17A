var ports = [];
chrome.runtime.onConnect.addListener(function(port){
    if(port.name !== 'devtools') return;
    ports.push(port);

    port.onDisconnect.addListener(function() {
        var i =ports.indexOf(port);
        if(i !== -1 ) ports.splice(i,1);
    });

    port.onMessage.addListener(function(msg){
        console.log('recieved msg from devtools page',msg);
    });

    var devtoolsConnector = function(message, sender, sendResponse){
    chrome.tabs.executeScript(message.tabId,
    {file:message.scriptToInject});
    }
});

function notifyDevtools(msg){
    // ports.forEach(function(port){
    //     port.postMessage(msg);
    // })
}

// function findOutKony()
// {
//     if(kony)
//     {
//         console.log('yeah something is there')
//     }
// }
// findOutKony();


