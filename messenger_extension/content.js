document.body.style.background = 'yellow';

console.log(window);
var wind = window;
chrome.runtime.sendMessage({
    body: wind.localstorage
},
function (response) {
    console.log(response);
})
