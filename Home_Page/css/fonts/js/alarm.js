(function () {
    'use strict';
     var alarmName = 'remindme';
     function checkAlarm(callback) {
       chrome.alarms.getAll(function(alarms) {
         var hasAlarm = alarms.some(function(a) {
           return a.name == alarmName;
         });
         chrome.alarms.getAll(function(alarms) {
          console.log(alarms);
          console.log(alarms[0]);
        });
         var newLabel;
         if (hasAlarm) {
           newLabel = 'Cancel alarm';
         } else {
           newLabel = 'Activate alarm';
         }
         document.getElementById('toggleAlarm').innerText = newLabel;
         if (callback) callback(hasAlarm);
       })
     }
     function createAlarm() {
       chrome.alarms.create(alarmName, {delayInMinutes: 1, periodInMinutes: 0.1});
     }
     function cancelAlarm() {
       chrome.alarms.clear(alarmName);
     }
     function doToggleAlarm() {
       checkAlarm( function(hasAlarm) {
         if (hasAlarm) {
           cancelAlarm();
         } else {
           createAlarm();
         }
         checkAlarm();
       });
     }

     var stuff=document.getElementById("toggleAlarm");
     stuff.addEventListener('click',doToggleAlarm);
    checkAlarm();
  })();