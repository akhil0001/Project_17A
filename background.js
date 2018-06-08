chrome.runtimme.onInstalled.addListener( () => {
    chrome.storage.sync.set({color: '#3a23d7'}, () =>{
        console.log('The color has been set to the green');
    })
})