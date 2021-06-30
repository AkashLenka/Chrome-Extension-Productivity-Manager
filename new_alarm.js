const but=document.getElementById("nothing2");
but.addEventListener("click",()=>{
    window.close();
});
var poster="https://stackoverflow.com/questions/55092968/javascript-to-auto-close-a-tab-based-on-the-url";
const relu=document.getElementById("closer");
relu.addEventListener("click",()=>{
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(tab => {
            console.log(tab);
         //   if(tab.url==poster)
           //     chrome.tabs.remove(tab.id, function() { });
        });
    }); 
});
