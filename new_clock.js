const but=document.getElementById("nothing1");
but.addEventListener("click",()=>{
    window.close();
});
const date=new Date();
        var poss=date.toDateString();
        console.log(poss.length);
        document.getElementById("ino").innerHTML=poss.slice(4,15);
        function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("mytime").innerText = time;
    document.getElementById("mytime").textContent = time;
    setTimeout(showTime, 1000);
}
showTime();


// var options={
//     type: "image",
//     title: "Productivity Manager",
//     message: "Please complete you work you have more 5 minites",
//     iconUrl: "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg",
//     imageUrl: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"  
// }
  
// const hery=document.getElementById("notify");
// hery.addEventListener('click',()=>{
//       chrome.notifications.create("daech", options, ()=>{console.log("created")});
// });

// chrome.notifications.onButtonClicked.addListener(replyBtnClick);
// function replyBtnClick()
// {
//   console.log("termiates");
// }