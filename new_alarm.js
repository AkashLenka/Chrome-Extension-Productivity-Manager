//-----closes entire windows---------------------------//
//const but=document.getElementById("nothing2");
//but.addEventListener("click",()=>{
//  window.close();
//});


//----------------closing a particular tab------------------//
// var poster="https://stackoverflow.com/questions/55092968/javascript-to-auto-close-a-tab-based-on-the-url";
// const relu=document.getElementById("closer");
// relu.addEventListener("click",()=>{
//     chrome.tabs.query({}, function (tabs) {
//         tabs.forEach(tab => {
//             console.log(tab);
//         });
//     }); 
// });
const clock = document.getElementById('clockdiv');
const daysSpan = clock.querySelector('.days');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secondsSpan = clock.querySelector('.seconds');


function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {total,days,hours,minutes,seconds};
}

function startTimer(time) {
  //console.log(time.getTime());
  //console.log(parseDate(time.getTime()));
  if (Date.parse(time) > Date.now()) {
    setInterval(() => {
      const clock = document.getElementById('clockdiv');
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
    const t=getTimeRemaining(time);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
    }, 1000);
  }
}

chrome.runtime.sendMessage({ cmd: 'GET_TIME' }, response => {
  if (response.time) {
    const time = new Date(response.time);
    startTimer(time)
  }
});

function startTime(time) {
  chrome.runtime.sendMessage({ cmd: 'START_TIMER', when: Date.now()+time });
  startTimer(time);
}

document.getElementById("huy").addEventListener("click", function(event){
  event.preventDefault();
  const vl=document.getElementById("min").value;
  console.log(vl);
  if(vl>0)
  {
  startTime(vl*60*1000);
  }
//  const deadline = new Date(Date.parse(new Date()) +  vl *60* 1000); 
// initializeClock('clockdiv', deadline);
  document.getElementById("min").value="";
});

// var options={
//     type: "image",
//     title: "Productivity Manager",
//     message: "Please complete you work you have more 5 minites",
//     iconUrl: "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg",
//     imageUrl: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"  
// }


  
  // function initializeClock(id, endtime) {
  //   const clock = document.getElementById(id);
  //   const daysSpan = clock.querySelector('.days');
  //   const hoursSpan = clock.querySelector('.hours');
  //   const minutesSpan = clock.querySelector('.minutes');
  //   const secondsSpan = clock.querySelector('.seconds');
  
  //   function updateClock() {
  //     const t = getTimeRemaining(endtime);
  //     daysSpan.innerHTML = t.days;
  //     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  //     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  //     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  //     if (t.total <= 0) {
  //       clearInterval(timeinterval);
  //     //  chrome.notifications.create("daech", options, ()=>{console.log("created")});
  //     //  chrome.notifications.onButtonClicked.addListener(replyBtnClick);
  //       function replyBtnClick()
  //       {
  //           console.log("termiates");
  //       }
        
  //     }
  //   }
  //   updateClock();
  //   const timeinterval = setInterval(updateClock, 1000);
  // }




