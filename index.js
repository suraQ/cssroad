function $id(id) {
  return document.getElementById(id);
}

var start = $id('start');
var goal = $id('goal');
var timerNum = $id('timerNum');
var tweetText = $id('tweetText');
var resultBtn = $id('resultBtn');

start.onmouseover = startRoad;
goal.onmouseover = goalRoad;

function startRoad() {
  startTimer();
  start.onmouseover = false;
}
function goalRoad() {
  stopTimer();
  tweetText.innerHTML = '記録<strong>' + timerNum.innerHTML + '</strong>秒！';
  resultBtn.onclick = resultTweet;
}
function startTimer() {
  timer = setInterval(function() {
    timerNum.innerHTML = parseInt(timerNum.innerHTML) + 1;
  },1000 );
}
function stopTimer() {
  clearInterval(timer);
}
