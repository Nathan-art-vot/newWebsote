const showScore = document.querySelector(".scoreGame")
var bird = document.getElementById("player");
var score = 0;
var time = 0;

function randomMove() {
    var x =  Math.floor(Math.random() * 481)
    var y =  Math.floor(Math.random() * 1052)
    bird.style.top = x + "px";
    bird.style.left = y + "px";
}

var transition = setInterval(function () {
randomMove();
time++;

if (time == 10) {
    if (score >= 5) {
        document.body.style.backgroundImage = "url(images/image/win.jpg";
        reset()
      } else {
            document.body.style.backgroundImage = "url(images/image/lose.png"
            reset()
        }

    
}

}, 1000);
bird.onclick = function () {
    score++;
    showScore.innerHTML = `${score} `;

};

function reset() {
    clearInterval(transition)
    bird.style.display = "none";
    decodeURIComponent.getElementById("scoreMain").style.display = "none";
}