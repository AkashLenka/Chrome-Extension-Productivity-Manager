
console.log("runing man");
chrome.tabs.onCreated.addListener(function(tab){
    chrome.storage.local.set({[tab.id] : performance.now()},()=>{
        console.log([tab.id]);
    });
});

chrome.browserAction.onClicked.addListener(buttonclick);
function buttonclick()
{
    chrome.browserAction.openPopup();
}


//chrome.browserAction.onClicked.addListener(function () {
  //  chrome.tabs.create({ url: chrome.runtime.getURL("/comingsoon_08/index.html") });
//});
