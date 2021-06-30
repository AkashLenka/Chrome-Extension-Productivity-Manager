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

