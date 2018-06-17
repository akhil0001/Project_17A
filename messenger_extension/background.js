console.log('hi');
var a;
chrome.runtime.onMessage.addListener(function (msg,sender, sendResponse) {
    a = msg;
    sendResponse({
        type:msg
    });
});

console.log(a);