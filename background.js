
// console.log("runing man");
// chrome.tabs.onCreated.addListener(function(tab){
//     chrome.storage.local.set({[tab.id] : performance.now()},()=>{
//         console.log([tab.id]);
//     });
// });

chrome.browserAction.onClicked.addListener(buttonclick);
function buttonclick()
{
    chrome.browserAction.openPopup();
}

var options={
  type: "image",
  title: "Productivity Manager",
  message: "Your time is up your work needs to be done by now.",
  iconUrl: "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg",
  imageUrl: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"  
}
let timerID;
let timerTime;
var fung;
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.cmd === 'START_TIMER') 
  {
    timerTime = new Date(request.when);
    timerID = setTimeout(() => 
    {
     chrome.notifications.create("daech", options, ()=>{ 
      var ter="https://*.com/*";
      chrome.webRequest.onBeforeRequest.addListener(function(details)
      {return {cancel:true};},
      {urls:[ter]},
      ["blocking"]);});
    }, timerTime.getTime() - Date.now());
  } 
  else if (request.cmd === 'GET_TIME') 
  {
    sendResponse({ time: timerTime });
  }
});


var value=0;
var store=[];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.cmd === 'FORM_ONE') 
  {
    var keyer=request.val;
    store.push(keyer);
  //  console.log(store);
  } 
  else if(request.cmd==='GET_ALL')
  {
    console.log("bantai " + store);
   
    chrome.webRequest.onBeforeRequest.addListener(function(details)
      {console.log("here"+ store); return {cancel:true};},
      {urls:store},
      ["blocking"]);
      sendResponse({oal: store});
  }
  else if(request.cmd=== 'DELETE')
  {
    console.log("delete");
    var ifer=request.val;
    console.log(ifer);
    var erricht=store.indexOf(ifer);
    console.log(erricht);
    store.splice(erricht,1);
    console.log(store);
  }
});


