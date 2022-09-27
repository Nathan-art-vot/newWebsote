var milli_seconds = 0,
  seconds = 0,
  minutes = 0;
  hours = 0;
var h1 = document.getElementById("time");
(start = document.getElementById("button-start")),
(stop = document.getElementById("button-stop")),
(clear = document.getElementById("button-reset"))
var interval = 1;
function count() {
interval = 1;
milli_seconds += interval;
  

if (milli_seconds >= 100){
milli_seconds = 0;
seconds += interval;
}

if (seconds >= 60){
milli_seconds = 0;
seconds = 0;
minutes += interval;
}
if (minutes >= 60){
    minutes = 0;
    hours += interval;
    }

 
 h1.textContent = 
 (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
":" +
(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
":" +
(seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
":" +
(milli_seconds > 9 ? milli_seconds : "0" + milli_seconds);



timer();
}
function timer() {
 t = setTimeout(count, 10);
}

// start
start.onclick = count;

// stop
stop.onclick = function () {
    clearTimeout(t);
};

// clear
clear.onclick = function () {
h1.textContent = "00:00:00:00";
hours = 0;
seconds = 0;
minutes = 0;
milli_seconds = 0;
interval = 0;
}








