(function () {

    var backgroundPageConnection = chrome.runtime.connect({
        name: "devtools-page"
    });

    backgroundPageConnection.onMessage.addListener(function (message) {
        // Handle responses from the background page, if any
        console.log('Recieved from the background', message)
    });

    var panels = chrome.devtools.panels;

    // panel
    var panel = panels.create(
        "DevtoolsExtension",
        "icon_ironman.png",
        "panel.html", function () {
            // Relay the tab ID to the background page
        }
    );
})();