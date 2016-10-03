var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var drawMiliseconds = function() {
	miliseconds++;
	if (miliseconds==100) {
		miliseconds = 0;
		seconds++;	
		if (seconds==60) {
			seconds = 0;
			minutes++;
			if (minutes==60) {
				minutes = 0;
				hours++;
				if (hours==24) {
					hours=0;
				}
				drawHours();
			}
			drawMinutes();
		}
		drawSeconds();
	}
	document.body.getElementsByClassName('miliseconds')[0].innerHTML= formatTime(miliseconds);
}
var drawSeconds = function(){
	document.body.getElementsByClassName('seconds')[0].innerHTML= formatTime(seconds);
}
var drawMinutes = function(){
	document.body.getElementsByClassName('minutes')[0].innerHTML= formatTime(minutes);
}
var drawHours = function(){
	document.body.getElementsByClassName('hours')[0].innerHTML= formatTime(hours);
}
var formatTime = function(e){
	if (e<10) {
		return '0'+e;
	}
	else {
		return e;	
	}
}
var doStart = function () {
	timer = setInterval(drawMiliseconds, 10);
	btnStart.innerHTML = 'Pause';
	btnStart.removeEventListener('click', doStart);
	btnStart.addEventListener('click', doPause);
	btnStop.addEventListener('click', doStop);
}
var doPause = function () {
	clearInterval(timer);
	btnStart.innerHTML = 'Resume';
	btnStart.removeEventListener('click', doPause);
	btnStart.addEventListener('click', doStart);
}
var doStop = function () {
	clearInterval(timer);
	miliseconds = -1;
	drawMiliseconds();
	seconds = 0;
	drawSeconds();
	minutes = 0;
	drawMinutes();
	hours = 0;
	drawHours();
	btnStart.innerHTML = 'Start';
	var new_element = btnStart.cloneNode(true);
	btnStart.parentNode.replaceChild(new_element, btnStart);
	btnStart = new_element;
	btnStop.removeEventListener('click', doStop);
	btnStart.addEventListener('click', doStart);
}
var btnStop = document.getElementById('stop');

var btnStart = document.getElementById('start');
btnStart.addEventListener('click', doStart);