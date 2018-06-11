// function alertOnButtonCLick()
// {
//     alert('Alright! This is working')
// }

// document.getElementById('submit').onclick= alertOnButtonCLick;

// function checkIfLKonyIsUsed(){
//     "use strict"
//     var msg = ""
//     var konyDebugWindow = window.kony;
//     if(!konyDebug) {
//         msg = "Kony is not used in the project"
//     }
//     else{
//         msg="Kony is used in this project"
//     }
// }

function do_something(msg) {
   // document.body.textContent += '\n' + msg;
   console.log(msg);
}

// document.documentElement.onclick = function () {
//     console.log(window)
//     respond('Another masg');

// }

// chrome.devtools.inspectedWindow.eval(
//     "kony.globals.version",
//      function(result, isException) {
//        if (isException)
//          console.log("the page is not using jQuery");
//        else
//          document.body.textContent = result;
//      }
// );

function amIAbletoAccessKonyVar()
{
  document.body.textContent = window.kony;
  console.log(window);
}
//amIAbletoAccessKonyVar();