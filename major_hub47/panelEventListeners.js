function alertOnButtonCLick()
{
    alert('Alright! This is working')
}

document.getElementById('submit').onclick= alertOnButtonCLick;

function checkIfLKonyIsUsed(){
    "use strict"
    var msg = ""
    var konyDebugWindow = window.kony;
    if(!konyDebug) {
        msg = "Kony is not used in the project"
    }
    else{
        msg="Kony is used in this project"
    }
}