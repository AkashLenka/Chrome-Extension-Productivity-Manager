
chrome.runtime.sendMessage({cmd: 'GET_ALL', val:"retro_disco"},response=>{
  var myNodelist = response.oal;
  var i;
  console.log(myNodelist);
  for (i = 0; i < myNodelist.length; i++) 
  {
    var li = document.createElement("li");
    var t = document.createTextNode(myNodelist[i]);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  }
});


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
console.log("lenth is tada"+close.length);
for(var tfr=0;tfr<close.length;tfr++)
{
  close[tfr].addEventListener('click',()=>{
        console.log("hraaaa");
        chrome.runtime.sendMessage({ cmd: 'DELETE' , val: this.parentElement.innerText.slice(0,this.parentElement.innerText.length-2)}, () => {
          console.log("Testing it "+ val);
        });
        var div = this.parentElement;
        div.style.display = "none";
      }
    );
}

const red=document.getElementById("takeme");
red.addEventListener('click',()=> {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    chrome.runtime.sendMessage({ cmd: 'FORM_ONE' , val: inputValue}, () => {
      console.log("returnals");
    });
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      console.log("kkkkkk");
      chrome.runtime.sendMessage({ cmd: 'DELETE' , val: this.parentElement.innerText.slice(0,this.parentElement.innerText.length-2)}, () => {
        console.log("Testing it "+ val);
      });
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});
