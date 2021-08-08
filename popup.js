document.addEventListener('DOMcontentLoaded', function(){
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick(){
        chrome.tabs.querySelector({currentWindow:true, active: true},
         function(tabs){
             chrome.tabs.sendMessage(tabs[0].id,'Hotdogs')
         })
    }

},false)