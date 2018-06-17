
(function () {
  var connections = {};
  var constant_message;
  chrome.tabs.onUpdated.addListener(function (tabId, changes, tabObject) {
    console.log("Status of", tabId, "is", changes.status);
    if (changes.status == "complete") {
      console.log("Tab Load Complete");
    }
  });
  chrome.runtime.onConnect.addListener(function (port) {

      console.log("Received a connection from ", port);

      var extensionListener = function (message, sender, sendResponse) {

          console.log("Message received ", message);

          // The original connection event doesn't include the tab ID of the
          // DevTools page, so we need to send it explicitly.
          switch (message.name){
              case 'init':
                  connections[message.tabId] = port;
                 console.log('===just now initiailized===');
                 connections[message.tabId].postMessage(constant_message);
                  break;
              // case 'execScript':
              //     console.log("Injecting script " + message.scriptToInject);
              //     chrome.tabs.executeScript(message.tabId,
              //         { file: message.scriptToInject });
              //     break;
              default:
                  break;
          }

          // other message handling
      }

      // Listen to messages sent from the DevTools page
      port.onMessage.addListener(extensionListener);

      port.onDisconnect.addListener(function(port) {
          port.onMessage.removeListener(extensionListener);

          var tabs = Object.keys(connections);
          for (var i=0, len=tabs.length; i < len; i++) {
              if (connections[tabs[i]] == port) {
                  delete connections[tabs[i]]
                  break;
              }
          }
      });
  });

// Receive message from content script and relay to the devTools page for the
// current tab
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      // Messages from content scripts should have sender.tab set
      //console.log("Message received from content script", request);
      if(request.type === 'kony_detect_true'&& sender.tab) {
        chrome.browserAction.setIcon({
          path:{
            48: 'knighticon.png'
          },
          tabId: sender.tab.id
        })
        var tabId = sender.tab.id;
        constant_message = request;
          if (tabId in connections) {
            //console.log(tabId);
              connections[tabId].postMessage(request);
          } else {
           //   console.log("Tab not found in connection list.");
          }
      }
      else {
         // console.log("sender.tab not defined.");
      }
      return true;
  });
})();